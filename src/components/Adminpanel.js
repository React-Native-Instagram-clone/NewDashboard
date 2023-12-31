import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import axios from "axios";
const AdminPanelForm = () => {
  const [formData, setFormData] = useState({
    user: "",
    role: "",
    activeStatus: "Select Status",
  });

  const [statusColor, setStatusColor] = useState("white");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setStatusColor(value === "Yes" ? "lightgreen" : "lightcoral");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://myserver-kohl.vercel.app/api/addUser",
        {
          name: formData.user,
          role: formData.role,
          status: formData.activeStatus === "Yes",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      console.log(formData, "formData");
      const assignedRoles =
        JSON.parse(localStorage.getItem("assignedRoles")) || [];
      assignedRoles.push(formData);
      localStorage.setItem("assignedRoles", JSON.stringify(assignedRoles));
      console.log("User added successfully:", response.data);
    } catch (error) {
      console.error("Error setting up the request:", error.message);
    }
  };

  const users = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users")).map((user) => user.username)
    : [];
  return (
    <div className="container mt-5">
      <Header title="ADMIN PANEL" />
      <div className="border p-4 rounded">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="user"
              className="form-label"
              style={{ fontSize: "1.2rem" }}
            >
              User Name:
            </label>
            <select
              className="form-select"
              id="user"
              name="user"
              value={formData.user}
              onChange={handleChange}
              style={{ fontSize: "1.2rem" }}
            >
              <option value="">Select User</option>
              {users.map((userName) => (
                <option key={userName} value={userName}>
                  {userName}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label
              htmlFor="role"
              className="form-label"
              style={{ fontSize: "1.2rem" }}
            >
              Role:
            </label>
            <select
              className="form-select"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              style={{ fontSize: "1.2rem" }}
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Auc">Auc</option>
              <option value="Bid">Bid</option>
              <option value="Superadmin">Superadmin</option>
            </select>
          </div>

          <div className="mb-3">
            <label
              htmlFor="activeStatus"
              className="form-label"
              style={{ fontSize: "1.2rem" }}
            >
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
                fontSize: "1.2rem",
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
