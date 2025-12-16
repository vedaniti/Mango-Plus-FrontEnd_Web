import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const services = [
    { id: 1, title: "🌾 Farmer to Merchant", desc: "Connect farmers directly with wholesale merchants", path: "/Services/Farmer to Merchant" },
    { id: 2, title: "👨‍🌾 Farmer to Farmer", desc: "Platform for farmers to trade among themselves", path: "/Services/Farmer to Farmer" },
    { id: 3, title: "🏪 Merchant to Farmer", desc: "Merchants supplying inputs to farmers", path: "/Services/Merchant to Farmer" },
    { id: 4, title: "🏪 Merchant to Retailer", desc: "Rent farm equipment at affordable rates", path: "/Services/Merchant to Retailer" },
    { id: 5, title: "📊 Transports", desc: "Real-time market prices and trends", path: "/Services/Transports" },
    { id: 6, title: "📦 Nursery", desc: "Cold storage and transportation services", path: "/Services/Nursery" },
    { id: 7, title: "💰 About Animals", desc: "Loans and financial services for farmers", path: "/Services/About Animals" },
    { id: 8, title: "🌱 Companies About Agriculture", desc: "Get certified as an organic farmer", path: "/Services/Companies About Agriculture" },
    { id: 9, title: "🚜 Agritourism", desc: "Rent farm equipment at affordable rates", path: "/Services/Agritourism" }
  ];

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Mango Plus 🥭</h1>
      <p className="home-subtitle">Empowering Farmers, Connecting Markets</p>
      
      <div className="services-grid">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="service-card"
            onClick={() => handleCardClick(service.path)}
          >
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <button className="service-button">Learn More →</button>
          </div>
        ))}
      </div>
      
      <div className="home-cta">
        <button className="home-button">Join Now</button>
        <button className="home-button secondary">Watch Demo</button>
      </div>
    </div>
  );
};

export default Home;