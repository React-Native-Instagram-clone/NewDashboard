import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MenuItemForm = () => {
  const [formData, setFormData] = useState({
    label: '',
    menuHeading: '',
    headingName: '',
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

  const labelStyle = { fontSize: '1.2rem' }; 
  const inputStyle = { fontSize: '1rem' };
  const selectStyle = { fontSize: '1rem' }; 

  return (
    <div className="container mt-5">
      <div className="border p-4 rounded">
        <h1 className="mb-4">Menu Item</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="label" className="form-label" style={labelStyle}>
              Label:
            </label>
            <input
              type="text"
              className="form-control"
              id="label"
              name="label"
              value={formData.label}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Label"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="menuHeading" className="form-label" style={labelStyle}>
              Menu Heading:
            </label>
            <input
              type="text"
              className="form-control"
              id="menuHeading"
              name="menuHeading"
              value={formData.menuHeading}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Menu Heading"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="headingName" className="form-label" style={labelStyle}>
              Heading Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="headingName"
              name="headingName"
              value={formData.headingName}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Heading Name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="activeStatus" className="form-label" style={labelStyle}>
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
                ...selectStyle,
              }}
            >
              <option value=" ">Select Status</option>
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

export default MenuItemForm;
