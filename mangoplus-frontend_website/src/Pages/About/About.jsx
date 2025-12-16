import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="about-title">About Mango Plus</h1>
        <p className="about-tagline">Bringing India's Finest Mangoes to You</p>
      </div>
      
      <div className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2020, Mango Plus started with a simple mission: to deliver 
            the authentic taste of Indian mangoes to every household. We work directly 
            with farmers across Maharashtra, Uttar Pradesh, and Gujarat.
          </p>
        </div>
        
        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <ul className="features-list">
            <li>✅ Direct from Farm - No Middlemen</li>
            <li>✅ 100% Organic & Chemical-Free</li>
            <li>✅ Premium Quality Assurance</li>
            <li>✅ Pan-India Delivery</li>
            <li>✅ 7-Day Freshness Guarantee</li>
          </ul>
        </div>
        
        <div className="stats-container">
          <div className="stat-item">
            <h3>50,000+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat-item">
            <h3>500+</h3>
            <p>Farm Partners</p>
          </div>
          <div className="stat-item">
            <h3>25+</h3>
            <p>Cities Served</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;