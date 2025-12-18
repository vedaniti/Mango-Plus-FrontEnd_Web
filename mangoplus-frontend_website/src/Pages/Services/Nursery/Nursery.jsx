import './Nursery.css';

const Nursery = () => {
return (
    <div className="service-detail-container">
      <div className="service-header">
        <h1>🌿 Nursery</h1>
        <p className="service-tagline">Direct Connection Between Farmers and Wholesale Buyers</p>
      </div>
      
      <div className="service-content">
        <div className="service-info">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <span className="step-number">1</span>
              <h3>Farmer Registration</h3>
              <p>Farmers register with their produce details, location, and quantity available.</p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <h3>Price Discovery</h3>
              <p>Real-time market prices and demand trends are shared with farmers.</p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <h3>Direct Negotiation</h3>
              <p>Farmers and merchants negotiate directly without middlemen.</p>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <h3>Secure Payment</h3>
              <p>Escrow-based secure payments and delivery tracking.</p>
            </div>
          </div>
        </div>
        
        <div className="service-benefits">
          <h2>Benefits</h2>
          <div className="benefits-grid">
            <div className="benefit">
              <h4>💰 Better Prices</h4>
              <p>Eliminate middlemen, get 20-30% better prices</p>
            </div>
            <div className="benefit">
              <h4>🚚 Logistics Support</h4>
              <p>End-to-end transportation and storage solutions</p>
            </div>
            <div className="benefit">
              <h4>📊 Market Insights</h4>
              <p>Access to real-time demand and pricing data</p>
            </div>
            <div className="benefit">
              <h4>🔒 Secure Transactions</h4>
              <p>Escrow payment protection for both parties</p>
            </div>
          </div>
        </div>
        
        <div className="service-stats">
          <div className="stat">
            <h3>5,000+</h3>
            <p>Farmers Connected</p>
          </div>
          {/* <div className="stat">
            <h3>₹50+ Crore</h3>
            <p>Total Transactions</p>
          </div> */}
          <div className="stat">
            <h3>100+ Cities</h3>
            <p>Service Coverage</p>
          </div>
        </div>
        
        <button className="join-button">Join as Farmer</button>
        <button className="join-button merchant">Join as Merchant</button>
      </div>
    </div>
  );
};

export default Nursery