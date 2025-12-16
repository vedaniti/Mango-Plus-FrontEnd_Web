import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Mango Plus</h2>
      <div style={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#333",
    color: "white",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  },
  logo: {
    margin: 0,
    color: "white"
  },
  links: {
    display: "flex",
    gap: "20px"
  }
};

export default Navbar;