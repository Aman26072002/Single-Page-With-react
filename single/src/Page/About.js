
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutPage = () => {
  return (
    <div className="container py-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1>About Us</h1>
        <p className="lead">We are passionate about building technology that empowers businesses and people.</p>
      </div>

      {/* About Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-md-6">
          <img src="C:\Users\anand\OneDrive\Desktop\code\react code\Code_With_Hearry\my-app\src\pages\a.png/30*40px"  alt="About"
            // className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h3>Who We Are</h3>
          <p>
            We are a dedicated team of developers, designers, and strategists who believe in the power of
            innovation. Since our inception, we've focused on delivering value through smart digital solutions
            for startups, SMEs, and large enterprises.
          </p>
        </div>
      </div>

      {/* Mission / Vision / Values */}
      <div className="row text-center">
        <div className="col-md-4">
          <i className="bi bi-bullseye display-4 text-primary"></i>
          <h4 className="mt-3">Our Mission</h4>
          <p>To deliver scalable, high-quality solutions that solve real-world problems.</p>
        </div>
        <div className="col-md-4">
          <i className="bi bi-eye display-4 text-success"></i>
          <h4 className="mt-3">Our Vision</h4>
          <p>To be a globally trusted technology partner and thought leader.</p>
        </div>
        <div className="col-md-4">
          <i className="bi bi-heart-fill display-4 text-danger"></i>
          <h4 className="mt-3">Our Values</h4>
          <p>Integrity, innovation, transparency, and customer success.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;