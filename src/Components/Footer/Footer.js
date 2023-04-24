import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#222", color: "#fff", padding: "2rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h3 style={{ fontSize: "1.5rem", margin: 0 }}>NewsSite</h3>
          <p style={{ margin: 0 }}>Bringing you the latest news</p>
        </div>
        <div>
          <h4 style={{ margin: 0 }}>Follow Us</h4>
          <div style={{ display: "flex" }}>
            <a href="https://twitter.com" style={{ color: "#fff", marginRight: "1rem" }}>
              Twitter
            </a>
            <a href="https://facebook.com" style={{ color: "#fff", marginRight: "1rem" }}>
             FB
            </a>
            <a href="https://instagram.com" style={{ color: "#fff" }}>
              Instagram
            </a>
          </div>
        </div>
      </div>
      <hr style={{ backgroundColor: "#444" }} />
      <p style={{ fontSize: "0.8rem", margin: 0 }}>© 2023 NewsSite. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
