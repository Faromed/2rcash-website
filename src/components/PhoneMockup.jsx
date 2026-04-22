import {
  FiBell, FiClock, FiStar,
  FiHeadphones, FiFileText, FiShield, FiBook
} from 'react-icons/fi';
import config from '../config';

export default function PhoneMockup() {
  return (
    <div className="phone-container">
      <div className="phone-glow" />
      <div className="phone-frame">
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className="ps-header">
            <div className="ps-menu">
              <span /><span /><span />
            </div>
            <div className="ps-greeting">
              <div className="ps-greeting-hello">{config.mockup.statusLabel}</div>
              <div className="ps-greeting-name">{config.mockup.platformHint}</div>
            </div>
            <div className="ps-bell"><FiBell size={12} color="#fff" /></div>
          </div>

          <div className="ps-ticker">
            <span className="ps-ticker-icon">Info</span>
            <span className="ps-ticker-text">Bienvenue sur 2RCASH {config.platformName} ! Rechargez en toute securite.</span>
          </div>

          <div className="ps-section-title">Rechargement rapide</div>
          <div className="ps-section-sub">Plateforme dediee</div>

          <div className="ps-cards">
            <div className={`ps-card ps-card-${config.platformTone}`}>
              <div className="ps-card-icon">{config.mockup.cardIcon}</div>
              <div className="ps-card-title">{config.platformUppercase}</div>
              <div className="ps-card-sub">{config.mockup.amountLabel}</div>
            </div>
          </div>

          <div className="ps-chip-row">
            {config.mockup.chips.map((chip) => (
              <div className="ps-chip" key={chip}>{chip}</div>
            ))}
          </div>

          <div className="ps-mini-panel">
            <div className="ps-mini-label">{config.mockup.accountLabel}</div>
            <div className="ps-mini-value">458 920 17</div>
          </div>

          <div className="ps-quick-title">Acces rapide</div>
          <div className="ps-quick-grid">
            {config.mockup.quickItems.map((label, index) => {
              const icons = [
                FiClock,
                FiStar,
                FiHeadphones,
                FiFileText,
                FiShield,
                FiBook,
              ];
              const Icon = icons[index];

              return (
                <div className="ps-quick-item" key={label}>
                  <Icon className="ps-quick-item-icon" size={12} />
                  <span className="ps-quick-item-label">{label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

