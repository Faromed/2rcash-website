import { FiDownload, FiExternalLink, FiSmartphone } from 'react-icons/fi';
import { FaGooglePlay } from 'react-icons/fa';
import useScrollReveal from '../hooks/useScrollReveal';
import config from '../config';

export default function DownloadSection() {
  const ref = useScrollReveal();

  return (
    <section className="download section" id="telecharger" ref={ref}>
      <div className="container">
        <div className="download-inner">
          <div className="download-icon reveal">
            <img src={config.logoUrl} alt={`${config.platformName} logo`} className="download-brand-logo" />
          </div>

          <h2 className="download-title reveal">
            Telechargez <span className="gradient-text">{config.platformUppercase}</span> maintenant
          </h2>

          <p className="download-desc reveal">
            Une page claire, un univers dedie et un acces direct a votre application {config.platformName}.
          </p>

          <div className="download-buttons reveal">
            <span className="btn btn-primary btn-large btn-disabled download-btn-apk" aria-disabled="true">
              <FiDownload /> APK temporairement indisponible
            </span>

            <a
              href={config.temporaryLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-large download-alt-link"
            >
              <FiExternalLink /> {config.temporaryLinkLabel}
            </a>

            <div className="coming-soon-badge">
              <FaGooglePlay />
              <div>
                <div style={{ fontSize: '0.7rem', opacity: 0.6 }}>BIENTOT SUR</div>
                <div style={{ fontWeight: 600 }}>Google Play</div>
              </div>
            </div>
          </div>

          <p className="download-note reveal">
            <FiSmartphone style={{ verticalAlign: 'middle', marginRight: 6 }} />
            Le telechargement APK est desactive pour le moment • Version :{' '}
            <span className="version">{config.appVersion}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
