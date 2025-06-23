import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NameInputPage = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Pass name to the next page via state
    navigate('/display', { state: { userName: name } });
  };

  return (
    <div className="container py-5">
      <h2>Enter your id</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          required
        />
        <button type="submit" className="btn btn-primary">Go</button>
      </form>
    </div>
  );
};

export default NameInputPage;