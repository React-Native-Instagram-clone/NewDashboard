import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminPanelForm = () => {
  const [formData, setFormData] = useState({
    user: '',
    role: '',
    activeStatus: 'Select Status',
  });

  const [statusColor, setStatusColor] = useState('white');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setStatusColor(value === 'Yes' ? 'lightgreen' : 'lightcoral');
  };

  return (
    <div className="container mt-5">
      <div className="border p-4 rounded">
        <h1 className="mb-4">Admin Panel</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="user" className="form-label" style={{ fontSize: '1.2rem' }}>
              User Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="user"
              name="user"
              value={formData.user}
              onChange={handleChange}
              placeholder="Enter User Name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="role" className="form-label" style={{ fontSize: '1.2rem' }}>
              Role:
            </label>
            <select
              className="form-select"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              style={{ fontSize: '1.2rem' }}
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Auc">Auc</option>
              <option value="Bid">Bid</option>
              <option value="Superadmin">Superadmin</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="activeStatus" className="form-label" style={{ fontSize: '1.2rem' }}>
              Select Status:
            </label>
            <select
              className="form-select"
              id="activeStatus"
              name="activeStatus"
              value={formData.activeStatus}
              onChange={handleChange}
              style={{
                backgroundColor: statusColor,
                fontSize: '1.2rem',
              }}
            >
              <option value="">Select Status</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPanelForm;
