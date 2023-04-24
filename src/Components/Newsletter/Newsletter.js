import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      console.log(`Submitting email ${email} to newsletter`);
      setEmail("");
      alert("Thank you for subscribing!");
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "50vh", backgroundColor: "#f0f0f0" }}>
      <div style={{ display: "flex", flexDirection: "row", width: "80%" }}>
        <div style={{ flex: 0.5 }}>
          <img src="./assets/NewsLetter.png" alt="placeholder" style={{ width: "100%" }} />
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", padding: "2rem" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Subscribe to our Newsletter</h2>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "row", justifyContent: "flex-end", marginRight: "1rem" }}>
              <label style={{ display: "flex", flexDirection: "column" }}>
                Email:
                <input
                  type="email"
                  placeholder="email@yourmail.com"
                  value={email}
                  onChange={handleEmailChange}
                  style={{ padding: "0.5rem", fontSize: "1rem", border: "2px solid #ccc", borderRadius: "4px" }}
                />
                {emailError && <div style={{ color: "red", fontSize: "0.8rem", marginTop: "0.5rem" }}>{emailError}</div>}
              </label>
            </div>
            <div style={{ flex: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", marginLeft: "1rem" }}>
              <button type="submit" style={{ backgroundColor: "#007bff", color: "#fff", padding: "0.5rem 1rem", border: "none", borderRadius: "4px", fontSize: "1rem", cursor: "pointer" }}>Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
