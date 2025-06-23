import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const DisplayPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const userName = location.state?.userName;

  return (
    <div className="container py-5">
      <h2>Hello, {userName || 'Guest'}!</h2>
      <button className="btn btn-secondary mt-3" onClick={() => navigate('/')}>
        Back
      </button>
    </div>
  );
};

export default DisplayPage;