import Stripe from 'stripe'
import type { VercelRequest, VercelResponse } from '@vercel/node'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).end()
    return
  }

  const { episodeId, origin, type } = req.body as {
    episodeId: string | number
    origin: string
    type: 'episode' | 'subscription'
  }

  try {
    const isSubscription = type === 'subscription'

    const session = await stripe.checkout.sessions.create({
      mode: isSubscription ? 'subscription' : 'payment',
      line_items: [
        {
          price: isSubscription
            ? (process.env.STRIPE_SUB_PRICE_ID ?? 'price_1TPSOLPHUiSKssagL1EhI3d6')
            : 'price_1TP1GAPHUiSKssagUxdWPBzA',
          quantity: 1,
        },
      ],
      success_url: `${origin}/?unlocked=true&dossier_id=${episodeId}&type=${type}`,
      cancel_url: `${origin}/`,
    })

    res.json({ url: session.url })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Impossible de créer la session de paiement.' })
  }
}
