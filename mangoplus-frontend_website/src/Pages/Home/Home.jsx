import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Mango Plus 🥭</h1>
      <p className="home-subtitle">The Best Mango Experience Online</p>
      
      <div className="home-content">
        <div className="feature-card">
          <h3>🍹 Fresh Mango Juice</h3>
          <p>100% pure, no added sugar</p>
        </div>
        
        <div className="feature-card">
          <h3>🥭 Organic Mangoes</h3>
          <p>Direct from farms to your home</p>
        </div>
        
        <div className="feature-card">
          <h3>🚚 Fast Delivery</h3>
          <p>Across India in 2-3 days</p>
        </div>
      </div>
      
      <button className="home-button">Shop Now</button>
    </div>
  );
};

export default Home;