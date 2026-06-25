import { useMode } from '../ModeContext'
import type { Mode } from '../ModeContext'

interface Props {
  onSelect: () => void
}

export default function Gate({ onSelect }: Props) {
  const { setMode } = useMode()

  const choose = (m: Mode) => {
    setMode(m)
    onSelect()
  }

  return (
    <div className="gate">
      <div className="gate-vignette" aria-hidden="true" />
      <div className="gate-inner">
        <div className="gate-kicker">ARCHIVE PSYCHOLOGIQUE — POINT D'ENTRÉE</div>
        <div className="gate-logo">ABYSSO</div>
        <div className="gate-sub">CHOISISSEZ VOTRE MODE DE CONSULTATION</div>

        <div className="gate-grid">
          <div className="gate-card gate-card--clinique" onClick={() => choose('clinique')}>
            <div className="gate-card-top">
              <span className="gate-card-roman">I</span>
              <span className="gate-card-tag">DOC. IMPRIMÉ</span>
            </div>
            <div className="gate-card-title">Clinique</div>
            <div className="gate-card-desc">Un dossier médical typographié. Lecture calme sur papier, hairlines, formulaires d'observation. Aucun bruit.</div>
            <div className="gate-card-foot gate-card-foot--lines">
              <span style={{ width: '70%' }} />
              <span style={{ width: '90%' }} />
              <span style={{ width: '55%' }} />
            </div>
          </div>

          <div className="gate-card gate-card--surveillance" onClick={() => choose('surveillance')}>
            <div className="gate-card-scan" aria-hidden="true" />
            <div className="gate-card-top">
              <span className="gate-card-roman">II</span>
              <span className="gate-card-tag gate-card-tag--rec">● REC</span>
            </div>
            <div className="gate-card-title">Surveillance</div>
            <div className="gate-card-desc">Une console de vidéosurveillance. Multi-flux, horodatage permanent, réticule et brackets. On vous regarde lire.</div>
            <div className="gate-card-foot gate-card-foot--cams">
              <span><b>CAM01</b></span><span /><span />
            </div>
          </div>

          <div className="gate-card gate-card--interference" onClick={() => choose('interference')}>
            <div className="gate-card-scan gate-card-scan--tight" aria-hidden="true" />
            <div className="gate-card-top">
              <span className="gate-card-roman">III</span>
              <span className="gate-card-tag">NAVI://</span>
            </div>
            <div className="gate-card-title">Interférence<span className="gate-card-cursor" /></div>
            <div className="gate-card-desc">Un OS rétro corrompu. Fenêtres flottantes, scanlines, ASCII et glitch. La connexion n'est pas stable.</div>
            <div className="gate-card-foot gate-card-foot--term">
              &gt; init navi.psy<br />&gt; <span className="gate-card-corrupt">signal corrompu_</span>
            </div>
          </div>
        </div>

        <div className="gate-hint">VOUS POURREZ CHANGER DE MODE À TOUT MOMENT — COMMUTATEUR I / II / III</div>
      </div>
    </div>
  )
}
