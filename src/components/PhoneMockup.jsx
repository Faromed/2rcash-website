import {
  FiBell, FiClock, FiStar,
  FiHeadphones, FiFileText, FiShield, FiBook
} from 'react-icons/fi';

export default function PhoneMockup() {
  return (
    <div className="phone-container">
      <div className="phone-glow" />
      <div className="phone-frame">
        <div className="phone-notch" />
        <div className="phone-screen">
          {/* Header */}
          <div className="ps-header">
            <div className="ps-menu">
              <span /><span /><span />
            </div>
            <div className="ps-greeting">
              <div className="ps-greeting-hello">Bonjour 👋</div>
              <div className="ps-greeting-name">Farel</div>
            </div>
            <div className="ps-bell"><FiBell size={12} color="#fff" /></div>
          </div>

          {/* News Ticker */}
          <div className="ps-ticker">
            <span className="ps-ticker-icon">📢</span>
            <span className="ps-ticker-text">Bienvenue sur 2RCASH ! Rechargez en toute sécurité.</span>
          </div>

          {/* Section Title */}
          <div className="ps-section-title">Rechargement rapide</div>
          <div className="ps-section-sub">Sélectionnez votre plateforme</div>

          {/* Platform Cards */}
          <div className="ps-cards">
            <div className="ps-card ps-card-1xbet">
              <div className="ps-card-icon">⚽</div>
              <div className="ps-card-title">1XBET</div>
              <div className="ps-card-sub">Recharger</div>
            </div>
            <div className="ps-card ps-card-melbet">
              <div className="ps-card-icon">🏀</div>
              <div className="ps-card-title">MELBET</div>
              <div className="ps-card-sub">Recharger</div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="ps-quick-title">Accès rapide</div>
          <div className="ps-quick-grid">
            <div className="ps-quick-item">
              <FiClock className="ps-quick-item-icon" size={12} />
              <span className="ps-quick-item-label">Historique</span>
            </div>
            <div className="ps-quick-item">
              <FiStar className="ps-quick-item-icon" size={12} />
              <span className="ps-quick-item-label">Favoris</span>
            </div>
            <div className="ps-quick-item">
              <FiHeadphones className="ps-quick-item-icon" size={12} />
              <span className="ps-quick-item-label">Support</span>
            </div>
            <div className="ps-quick-item">
              <FiFileText className="ps-quick-item-icon" size={12} />
              <span className="ps-quick-item-label">CGU</span>
            </div>
            <div className="ps-quick-item">
              <FiShield className="ps-quick-item-icon" size={12} />
              <span className="ps-quick-item-label">Confid.</span>
            </div>
            <div className="ps-quick-item">
              <FiBook className="ps-quick-item-icon" size={12} />
              <span className="ps-quick-item-label">Mentions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}