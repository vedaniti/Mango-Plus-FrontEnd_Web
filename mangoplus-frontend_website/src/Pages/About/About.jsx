import "./About.css";
import { useNavigate } from "react-router-dom";

import mangoLogo from "./assets/mangoplus_logo.png";
import farmBackground from "./assets/farmbackground.jpeg";
import targetImage from "./assets/Digital transformation.png";

const About = () => {
  const navigate = useNavigate();

  const strings = {
    title: "About Mango Plus",
    tagline: "Transforming Agriculture Through Technology",
    descriptionShort:
      "A comprehensive platform connecting farmers, merchants, and consumers",
    exploreDashboard: "Explore Dashboard",
    aboutMangoPlus: "About Mango Plus",
    aboutMangoPlusText:
      "Mango Plus is an innovative agricultural technology platform designed to bridge the gap between farmers and markets. We leverage cutting-edge technology to create transparent, efficient, and profitable agricultural ecosystems.",
    ourMission: "Our Mission",
    ourMissionText:
      "To empower farmers with technology, connect them directly with buyers, and revolutionize the agricultural supply chain through digital transformation.",
    keyFeatures: "Key Features",
    feature1: "Real-time market prices and demand analytics",
    feature2: "Direct farmer-to-merchant trading platform",
    feature3: "Integrated logistics and supply chain management",
    feature4: "Access to agricultural financing and insurance",
    whoCanUse: "Who Can Use Mango Plus?",
    role1: "Small & Marginal Farmers",
    role2: "Agricultural Cooperatives",
    role3: "Food Processing Companies",
    role4: "Exporters & Wholesalers",
    benefits: "Key Benefits",
    benefit1: "20-30% better prices for farmers",
    benefit2: "Reduced post-harvest losses",
    benefit3: "Transparent pricing and transactions",
    benefit4: "Access to new markets",
    benefit5: "Real-time tracking and analytics",
    futureEnhancements: "Future Enhancements",
    future1: "AI-powered crop recommendation system",
    future2: "Drone-based field monitoring",
    future3: "Blockchain for supply chain transparency",
    contactUs: "Contact Us",
    companyEmail: "📧 support@mangoplus.com",
    phone: "📞 --",
    copyright: "© 2025 Mango Plus. All rights reserved.",
  };

  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <img src={mangoLogo} alt="Mango Plus" className="hero-logo slide-in" />
          <h1>{strings.title}</h1>
          <p className="hero-tagline">{strings.tagline}</p>
          <p className="hero-desc">{strings.descriptionShort}</p>
          <button onClick={() => navigate("/")} className="primary-btn">
            {strings.exploreDashboard}
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section grid">
        <div>
          <h2>{strings.aboutMangoPlus}</h2>
          <p>{strings.aboutMangoPlusText}</p>
        </div>
        <img src={farmBackground} alt="Farm" className="section-img slide-Left" />
      </section>

      {/* MISSION */}
      <section className="section grid reverse">
        <img src={targetImage} alt="Mission" className="section-img slide-Right" />
        <div>
          <h2>{strings.ourMission}</h2>
          <p>{strings.ourMissionText}</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section light">
        <h2 className="center">{strings.keyFeatures}</h2>
        <div className="cards">
          <div className="card">📊 {strings.feature1}</div>
          <div className="card">🤝 {strings.feature2}</div>
          <div className="card">🚚 {strings.feature3}</div>
          <div className="card">💰 {strings.feature4}</div>
        </div>
      </section>

      {/* USERS */}
      <section className="section">
        <h2 className="center">{strings.whoCanUse}</h2>
        <div className="chips">
          <span>👨‍🌾 {strings.role1}</span>
          <span>🏢 {strings.role2}</span>
          <span>🏭 {strings.role3}</span>
          <span>🌍 {strings.role4}</span>
        </div>
      </section>

     {/* BENEFITS */}
<section className="section light">
  <h2 className="center">{strings.benefits}</h2>

  <div className="benefits">
    <div className="benefit-card">{strings.benefit1}</div>
    <div className="benefit-card">{strings.benefit2}</div>
    <div className="benefit-card">{strings.benefit3}</div>
    <div className="benefit-card">{strings.benefit4}</div>
    <div className="benefit-card">{strings.benefit5}</div>
  </div>
</section>

      {/* FUTURE */}
      <section className="section">
        <h2 className="center">{strings.futureEnhancements}</h2>
        <div className="cards">
          <div className="card">🤖 {strings.future1}</div>
          <div className="card">🚁 {strings.future2}</div>
          <div className="card">🔗 {strings.future3}</div>
        </div>
      </section>

      {/* CONTACT */}
      <footer className="footer-c">
        <h3>{strings.contactUs}</h3>
        <p>{strings.companyEmail}</p>
        <p>{strings.phone}</p>
        <p className="copyright">{strings.copyright}</p>
      </footer>
    </div>
  );
};

export default About;
