
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, EditableText, InputGroup, Toaster } from "@blueprintjs/core";
import "./Table.css";

const AppToaster = Toaster.create({ position: "top" });
const API_URL = "http://127.0.0.1:8080"; // ✅ Ensure this matches backend port


function Table() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const rowsPerPage = 4;

  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    phone_number: "",
    address: "",
  });

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/users`, {
        headers: { 'Cache-Control': 'no-cache' }, // Prevent caching issues
        withCredentials: true,  // Needed if backend requires authentication
      });
      setData(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching data:", err.message);
      setError("Failed to fetch data");
      setLoading(false);
    }
  };
  

  
  

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhoneNumber = (number) => /^\d{10}$/.test(number);

  const validateField = () => {
    const errors = {};

    if (!newUser.first_name.trim()) errors.first_name = "First Name is required";
    if (!newUser.last_name.trim()) errors.last_name = "Last Name is required";
    if (!validateEmail(newUser.email)) errors.email = "Invalid email format";
    if (!newUser.gender) errors.gender = "Gender is required";
    if (!validatePhoneNumber(newUser.phone_number)) errors.phone_number = "Phone number must be 10 digits";
    if (!newUser.address.trim() || newUser.address.trim().length < 5)
      errors.address = "Address must be at least 5 characters long";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const addUser = async () => {
    if (!validateField()) return;
  
    try {
      await axios.post(`${API_URL}/users`, newUser);
      fetchUsers(); // ✅ Refresh the table after adding
      AppToaster.show({ message: "User added successfully", intent: "success" });
      setNewUser({ first_name: "", last_name: "", email: "", gender: "", phone_number: "", address: "" });
      setFormErrors({});
    } catch (err) {
      console.error("Error adding user:", err.message);
      AppToaster.show({ message: "Failed to add user", intent: "danger" });
    }
  };
  

  const updateUser = async (id, updatedUser) => {
    try {
      await axios.put(`${API_URL}/users/${id}`, updatedUser);
      fetchUsers(); // ✅ Refresh table after updating
      AppToaster.show({ message: "User updated successfully", intent: "success" });
    } catch (err) {
      console.error("Error updating user:", err.message);
      AppToaster.show({ message: "Failed to update user", intent: "danger" });
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${API_URL}/users/${id}`);
      fetchUsers(); // ✅ Refresh table after deleting
      setData((prevData) => prevData.filter((user) => user.id !== id));
      AppToaster.show({ message: "User deleted successfully", intent: "success" });
      setCurrentPage(1); // Reset to the first page
    } catch (err) {
      console.error("Error deleting user:", err.message);
      AppToaster.show({ message: "Failed to delete user", intent: "danger" });
    }
  };

  const filteredData = data.filter((item) =>
    [item.first_name, item.last_name, item.email, item.phone_number]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const currentData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="table-container">
      <h3 className="table-heading">Employee Directory System</h3>

      {/* Search Bar */}
      <InputGroup
        className="search-bar"
        placeholder="Search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
      />

      {/* Table */}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentData.length > 0 ? (
            currentData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <EditableText
                    value={user.first_name}
                    onChange={(value) =>
                      setData((prevData) =>
                        prevData.map((u) => (u.id === user.id ? { ...u, first_name: value } : u))
                      )
                    }
                  />
                </td>
                <td>
                  <EditableText
                    value={user.last_name}
                    onChange={(value) =>
                      setData((prevData) =>
                        prevData.map((u) => (u.id === user.id ? { ...u, last_name: value } : u))
                      )
                    }
                  />
                </td>
                <td>
                  <EditableText
                    value={user.email}
                    onChange={(value) =>
                      setData((prevData) =>
                        prevData.map((u) => (u.id === user.id ? { ...u, email: value } : u))
                      )
                    }
                  />
                </td>
                <td>
                  <select
                    value={user.gender}
                    onChange={(e) =>
                      setData((prevData) =>
                        prevData.map((u) => (u.id === user.id ? { ...u, gender: e.target.value } : u))
                      )
                    }
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="NotPreferToSay">Not Prefer to Say</option>
                  </select>
                </td>
                <td>
                  <EditableText
                    value={user.phone_number}
                    onChange={(value) =>
                      setData((prevData) =>
                        prevData.map((u) => (u.id === user.id ? { ...u, phone_number: value } : u))
                      )
                    }
                  />
                </td>
                <td>
                  <EditableText
                    value={user.address}
                    onChange={(value) =>
                      setData((prevData) =>
                        prevData.map((u) => (u.id === user.id ? { ...u, address: value } : u))
                      )
                    }
                  />
                </td>
                <td>
                  <Button intent="primary" onClick={() => updateUser(user.id, user)}>
                    Update
                  </Button>
                  <Button intent="danger" onClick={() => deleteUser(user.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No data available</td>
            </tr>
          )}
        </tbody>

        {/* Add User Row */}
        <tfoot>
          <tr>
            <td></td>
            <td>
              <InputGroup
                placeholder="First Name"
                value={newUser.first_name}
                onChange={(e) => setNewUser({ ...newUser, first_name: e.target.value })}
              />
              {formErrors.first_name && <div className="error">{formErrors.first_name}</div>}
            </td>
            <td>
              <InputGroup
                placeholder="Last Name"
                value={newUser.last_name}
                onChange={(e) => setNewUser({ ...newUser, last_name: e.target.value })}
              />
              {formErrors.last_name && <div className="error">{formErrors.last_name}</div>}
            </td>
            <td>
              <InputGroup
                placeholder="Email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              />
              {formErrors.email && <div className="error">{formErrors.email}</div>}
            </td>
            <td>
              <select
                value={newUser.gender}
                onChange={(e) => setNewUser({ ...newUser, gender: e.target.value })}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="NotPreferToSay">Not Prefer to Say</option>
              </select>
              {formErrors.gender && <div className="error">{formErrors.gender}</div>}
            </td>
            <td>
            <InputGroup
              placeholder="Phone Number"
              value={newUser.Number}  
              onChange={(e) => setNewUser({ ...newUser, phone_number: e.target.value })}
            />
              {formErrors.phone_number && <div className="error">{formErrors.phone_number}</div>}
            </td>
            <td>
              <InputGroup
                placeholder="Address"
                value={newUser.address}
                onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
              />
              {formErrors.address && <div className="error">{formErrors.address}</div>}
            </td>
            <td>
              <Button intent="success" onClick={addUser}>
                Add User
              </Button>
            </td>
          </tr>
        </tfoot>
      </table>

      {/* Pagination */}
      <div className="pagination-controls">
        <Button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
          Previous
        </Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default Table;
