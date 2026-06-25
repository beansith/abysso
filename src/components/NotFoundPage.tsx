interface Props {
  onBack: () => void
}

export default function NotFoundPage({ onBack }: Props) {
  return (
    <div className="not-found">
      <p className="not-found-code">Erreur 404</p>
      <h1 className="not-found-title">Ce dossier n'existe pas.</h1>
      <p className="not-found-sub">
        Il a peut-être été supprimé. Ou il n'a jamais existé.
      </p>
      <button className="not-found-link" onClick={onBack}>
        Retourner à l'archive
      </button>
    </div>
  )
}
