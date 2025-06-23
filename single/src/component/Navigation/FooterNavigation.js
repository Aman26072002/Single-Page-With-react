import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-auto py-4">
      <div className=" text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
          Thankyou wisite my website 
        </p>
        <div>
          <a href="/" className="text-white me-3 text-decoration-none">Home</a>
          <a href="/about" className="text-white me-3 text-decoration-none">About</a>
          <a href="/TextServicePage" className="text-white me-3 text-decoration-none">Services</a>
          <a href="/ContactPage" className="text-white text-decoration-none">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;