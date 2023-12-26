import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import axios from "axios";

const MenuPage = () => {
  const [menuHeading, setMenuHeading] = useState("");
  const [activeStatus, setActiveStatus] = useState("Yes");
  const [data, setData] = useState([]);
  const [newMenuHeading, setNewMenuHeading] = useState("");
  const [newMenuName, setNewMenuName] = useState("");
  const [newActiveStatus, setNewActiveStatus] = useState("Yes");

  const handleAddMenuItem = async (e) => {
    e.preventDefault();
    console.log("Adding Menu Item:", menuHeading, "with status:", activeStatus);
    try {
      const response = await axios.post(
        "https://myserver-kohl.vercel.app/api/addMenuHeading",
        {
          name: menuHeading,
          status: activeStatus === "Yes",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      console.log("User added successfully:", response.data);
      setMenuHeading("");
      setActiveStatus("Yes");
    } catch (error) {
      console.error("Error setting up the request:", error.message);
    }
  };

  const handleAddNewMenuItem = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://myserver-kohl.vercel.app/api/addMenuItem",
        {
          name: newMenuName,
          heading: "658afc3a1e661ef4873dd8d0",
          status: newActiveStatus === "Yes",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error("Error setting up the request:", error.message);
    }
    console.log(
      "Adding New Menu Item:",
      newMenuHeading,
      newMenuName,
      "with status:",
      newActiveStatus
    );
    setNewMenuHeading("");
    setNewMenuName("");
    setNewActiveStatus("Yes");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://myserver-kohl.vercel.app/api/fetchMenuHeading",
          {
            method: "GET",
          }
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error setting up the request:", error.message);
      }
    };
    fetchData();
  }, [handleAddNewMenuItem]);

  return (
    <div className="container mt-5">
      <div className="row mb-4">
        <div className="col-md-12">
          <Header title="MENU ITEMS" />
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
                      checked={activeStatus === "Yes"}
                      onChange={() => setActiveStatus("Yes")}
                    />
                    <label className="form-check-label">Yes</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      value="No"
                      checked={activeStatus === "No"}
                      onChange={() => setActiveStatus("No")}
                    />
                    <label className="form-check-label">No</label>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                  onClick={handleAddMenuItem}
                >
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
                    {data.map(({ _id, name }) => (
                      <option key={_id} value={_id}>
                        {name}
                      </option>
                    ))}
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
                      checked={newActiveStatus === "Yes"}
                      onChange={() => setNewActiveStatus("Yes")}
                    />
                    <label className="form-check-label">Yes</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      value="No"
                      checked={newActiveStatus === "No"}
                      onChange={() => setNewActiveStatus("No")}
                    />
                    <label className="form-check-label">No</label>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                  onClick={handleAddNewMenuItem}
                >
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
