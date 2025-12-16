
import React from 'react'

const Footer = () => {
   return (
    <footer style={styles.footer}>
      <p>© 2025 Mango Plus. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    padding: "15px",
    backgroundColor: "#222",
    color: "white",
    marginTop: "50px"
  }
};

export default Footer;