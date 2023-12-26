
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';

const MenuPage = () => {
  const [menuHeading, setMenuHeading] = useState('');
  const [activeStatus, setActiveStatus] = useState('Yes');

  const [newMenuHeading, setNewMenuHeading] = useState('');
  const [newMenuName, setNewMenuName] = useState('');
  const [newActiveStatus, setNewActiveStatus] = useState('Yes');

  const handleAddMenuItem = () => {
    console.log('Adding Menu Item:', menuHeading, 'with status:', activeStatus);
    setMenuHeading('');
    setActiveStatus('Yes');
  };

  const handleAddNewMenuItem = () => {
    console.log('Adding New Menu Item:', newMenuHeading, newMenuName, 'with status:', newActiveStatus);
    setNewMenuHeading('');
    setNewMenuName('');
    setNewActiveStatus('Yes');
  };

  return (
    <div className="container mt-5">
      <div className="row mb-4">
        <div className="col-md-12">
       
        <Header title="MENU ITEMS"/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-15 h-100 d-flex flex-column justify-content-center">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Add Menu Heading</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="menuHeading" className="form-label">
                    Menu Heading:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="menuHeading"
                    value={menuHeading}
                    onChange={(e) => setMenuHeading(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-check-label">Active:</label>
                  <div className="form-check form-check-inline ml-3">
                    <input
                      type="radio"
                      className="form-check-input"
                      value="Yes"
                      checked={activeStatus === 'Yes'}
                      onChange={() => setActiveStatus('Yes')}
                    />
                    <label className="form-check-label">Yes</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      value="No"
                      checked={activeStatus === 'No'}
                      onChange={() => setActiveStatus('No')}
                    />
                    <label className="form-check-label">No</label>
                  </div>
                </div>
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={handleAddMenuItem}>
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-15">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Add Menu Item</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="selectMenuHeading" className="form-label">
                    Select Menu Heading:
                  </label>
                  <select className="form-select" id="selectMenuHeading">
                    <option value="utility">Utility</option>
                    <option value="chart">Chart</option>
                    <option value="page">Page</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="menuName" className="form-label">
                    Menu Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="menuName"
                    value={newMenuName}
                    onChange={(e) => setNewMenuName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-check-label">Active:</label>
                  <div className="form-check form-check-inline ml-3">
                    <input
                      type="radio"
                      className="form-check-input"
                      value="Yes"
                      checked={newActiveStatus === 'Yes'}
                      onChange={() => setNewActiveStatus('Yes')}
                    />
                    <label className="form-check-label">Yes</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      value="No"
                      checked={newActiveStatus === 'No'}
                      onChange={() => setNewActiveStatus('No')}
                    />
                    <label className="form-check-label">No</label>
                  </div>
                </div>
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={handleAddNewMenuItem}>
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default MenuPage;
