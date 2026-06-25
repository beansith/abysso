import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import { frFR } from '@clerk/localizations'
import './index.css'
import App from './App.tsx'
import { ModeProvider, useMode } from './ModeContext'
import type { Mode } from './ModeContext'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string

interface ClerkModeAppearance {
  variables: Record<string, string>
  elements: Record<string, Record<string, string>>
}

// Palette Clerk par mode ABYSSO : la modale de connexion (Apple/Google/email)
// suit les mêmes teintes que le mode actif, plutôt que de rester figée en sombre.
// `elements` force header/cardBox/footer à utiliser le même fond que la carte
// principale (par défaut Clerk leur donne un fond légèrement différent).
function makeAppearance(bg: string, footerBg: string, text: string, textSecondary: string): ClerkModeAppearance['elements'] {
  return {
    cardBox: { backgroundColor: bg, boxShadow: 'none', border: 'none' },
    header: { backgroundColor: bg, boxShadow: 'none', border: 'none' },
    headerTitle: { color: text },
    headerSubtitle: { color: textSecondary },
    footer: { background: footerBg, backgroundColor: footerBg, boxShadow: 'none', border: 'none' },
    footerAction: { background: footerBg, backgroundColor: footerBg, boxShadow: 'none', border: 'none' },
  }
}

const CLERK_APPEARANCE_BY_MODE: Record<Mode, ClerkModeAppearance> = {
  clinique: {
    variables: {
      colorBackground: '#ccbea1',
      colorText: '#211a10',
      colorTextSecondary: '#5c4c34',
      colorTextOnPrimaryBackground: '#f2e9e2',
      colorPrimary: '#6e0f0f',
      colorNeutral: '#3a2f1d',
      colorMutedBackground: '#c2b394',
      colorInputBackground: '#d2c6a9',
      colorInputText: '#211a10',
      borderRadius: '0px',
      fontFamily: "'DM Sans', system-ui, sans-serif",
    },
    elements: makeAppearance('#ccbea1', '#c2b394', '#211a10', '#5c4c34'),
  },
  surveillance: {
    variables: {
      colorBackground: '#16201d',
      colorText: '#e3e9e0',
      colorTextSecondary: '#aab3a4',
      colorTextOnPrimaryBackground: '#0a0e0f',
      colorPrimary: '#c0504a',
      colorNeutral: '#aab3a4',
      colorMutedBackground: '#1d2925',
      colorInputBackground: '#1a2521',
      colorInputText: '#e3e9e0',
      borderRadius: '0px',
      fontFamily: "'IBM Plex Mono', monospace",
    },
    elements: makeAppearance('#16201d', '#1d2925', '#e3e9e0', '#aab3a4'),
  },
  interference: {
    variables: {
      colorBackground: '#241214',
      colorText: '#ece2e2',
      colorTextSecondary: '#bba8a8',
      colorTextOnPrimaryBackground: '#fceeee',
      colorPrimary: '#e03a3a',
      colorNeutral: '#bba8a8',
      colorMutedBackground: '#2c1618',
      colorInputBackground: '#291417',
      colorInputText: '#ece2e2',
      borderRadius: '0px',
      fontFamily: "'IBM Plex Mono', monospace",
    },
    elements: makeAppearance('#241214', '#2c1618', '#ece2e2', '#bba8a8'),
  },
}

function ClerkWithMode({ children }: { children: React.ReactNode }) {
  const { mode } = useMode()
  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      localization={frFR}
      appearance={CLERK_APPEARANCE_BY_MODE[mode]}
    >
      {children}
    </ClerkProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModeProvider>
      <ClerkWithMode>
        <App />
      </ClerkWithMode>
    </ModeProvider>
  </StrictMode>,
)
