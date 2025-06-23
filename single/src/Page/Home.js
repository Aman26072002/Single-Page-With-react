import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1>Welcome to Our Company</h1>
        <p className="lead">We deliver smart and scalable solutions to empower your business.</p>
        <a href="/about" className="btn btn-primary btn-lg mt-3">Learn More</a>
      </div>

      {/* Features Section */}
      <div className="row text-center">
        <div className="col-md-4">
          <i className="bi bi-speedometer2 display-4 text-primary"></i>
          <h4 className="mt-3">Fast</h4>
          <p>Quick, reliable, and scalable performance at your fingertips.</p>
        </div>
        <div className="col-md-4">
          <i className="bi bi-shield-lock display-4 text-success"></i>
          <h4 className="mt-3">Secure</h4>
          <p>Top-grade security protocols to protect your data.</p>
        </div>
        <div className="col-md-4">
          <i className="bi bi-people display-4 text-warning"></i>
          <h4 className="mt-3">Support</h4>
          <p>We’re here 24/7 to support your journey to success.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-5">
        <h2>Ready to get started?</h2>
        <a href="/ContactPage" className="btn btn-outline-success btn-lg mt-3">Contact Us</a>
      </div>
    </div>
  );
};

export default HomePage;