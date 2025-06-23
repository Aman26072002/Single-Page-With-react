import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ClientListPage = () => {
  const [clients, setClients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('clients')) || [];
    setClients(stored);
  }, []);

  const handleDelete = (index) => {
    const updated = clients.filter((_, i) => i !== index);
    setClients(updated);
    localStorage.setItem('clients', JSON.stringify(updated));
  };

  const handleEdit = (index) => {
    const client = clients[index];
    navigate('/new-client', {
      state: {
        editIndex: index,
        editData: client
      }
    });
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Client List</h2>
      <div className="text-end mb-3">
        <button className="btn btn-success" onClick={() => navigate('/NewClientPage')}>
          + Add New Client
        </button>
      </div>

      {clients.length === 0 ? (
        <p>No clients found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Company</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{client.fullName}</td>
                  <td>{client.email}</td>
                  <td>{client.phone}</td>
                  <td>{client.company}</td>
                  <td>
                    <button className="btn btn-warning btn-sm me-2"
                      onClick={() => handleEdit(index)}>
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ClientListPage;