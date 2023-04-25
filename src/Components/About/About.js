import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="founder-container">
        <div className="founder">
          <img src="./assets/Founder.jpeg" alt="Founder 1" />
          <h2>Samanvaya Bhardwaj</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vehicula nunc vel nisl ultrices, a pulvinar elit bibendum. Sed
            gravida iaculis lectus, a feugiat sapien consequat in thi.
          </p>
        </div>
        <div className="founder">
          <img src="./assets/Stevejobs.jpg" alt="Founder 2" />
          <h2>Steve Jobs</h2>
          <p>
            Duis vehicula nunc vel nisl ultrices, a pulvinar elit bibendum.
            Sed gravida iaculis lectus, a feugiat sapien consequat in. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
