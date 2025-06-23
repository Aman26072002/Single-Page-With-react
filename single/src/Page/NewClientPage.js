import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NewClientPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const editingIndex = location.state?.editIndex;
  const editingData = location.state?.editData;

  const [clientData, setClientData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
  });

  useEffect(() => {
    if (editingData) {
      setClientData(editingData);
    }
  }, [editingData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const clients = JSON.parse(localStorage.getItem('clients')) || [];

    if (editingIndex !== undefined) {
      clients[editingIndex] = clientData;
    } else {
      clients.push(clientData);
    }

    localStorage.setItem('clients', JSON.stringify(clients));
    navigate('/clients');
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">{editingIndex !== undefined ? 'Edit Client' : 'Add New Client'}</h2>

      <form onSubmit={handleSubmit} className="col-md-8 mx-auto">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="fullName"
            className="form-control"
            value={clientData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={clientData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="tel"
            name="phone"
            className="form-control"
            value={clientData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Company</label>
          <input
            type="text"
            name="company"
            className="form-control"
            value={clientData.company}
            onChange={handleChange}
          />
        </div>

        <div className="text-center">
          <button type="submit"  className="btn btn-primary">
            {editingIndex !== undefined ? 'Update Client' : 'Add Client'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewClientPage;