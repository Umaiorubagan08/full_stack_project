import React, { useState, useEffect } from "react";
import "./MyAccount.css";
import defaultProfileImage from './img/1.png';

export default function MyAccount() {
  const defaultDetails = {
    name: "Umaiorubagan",
    email: "umaiorubaganv@gmail.com",
    phone: "+1 234 567 8901",
    address: "123, Main Street, Dindigul, Tamil Nadu, India"
  };


  // storage the data in localstorage online materials
  const [accountDetails, setAccountDetails] = useState(() => {
    const savedData = localStorage.getItem("accountDetails");
    return savedData ? JSON.parse(savedData) : defaultDetails;
  });

  const [editable, setEditable] = useState(false);
  const [tempDetails, setTempDetails] = useState(accountDetails);
  const [profileImage, setProfileImage] = useState(defaultProfileImage);

  useEffect(() => {
    localStorage.setItem("accountDetails", JSON.stringify(accountDetails));
  }, [accountDetails]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setAccountDetails(tempDetails);
    setEditable(false);
    alert("Profile updated!");
  };

  const handleCancel = () => {
    setTempDetails(accountDetails);
    setEditable(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="account-container">
      <div className="account-header">
        <h1 className="account-head">My Account</h1>
      </div>
      <div className="profile-card">
        <div className="profile-image">
          <img src={profileImage} alt="Profile" />
          {editable && (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="image-upload"
            />
          )}
        </div>


        <div className="account-details">
          {editable ? (
            <>
              <input
                type="text"
                name="name"
                value={tempDetails.name}
                onChange={handleInputChange}
                placeholder="Name"
              />
              <input
                type="email"
                name="email"
                value={tempDetails.email}
                onChange={handleInputChange}
                placeholder="Email"
              />
              <input
                type="tel"
                name="phone"
                value={tempDetails.phone}
                onChange={handleInputChange}
                placeholder="Phone"
              />
              <textarea
                name="address"
                value={tempDetails.address}
                onChange={handleInputChange}
                placeholder="Address"
              />


              <div className="button-container">
                <button className="save-btn" onClick={handleSave}>
                  Save
                </button>
                <button className="cancel-btn" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <h2>{accountDetails.name}</h2>
              <p><strong>Email:</strong> {accountDetails.email}</p>
              <p><strong>Phone:</strong> {accountDetails.phone}</p>
              <p><strong>Address:</strong> {accountDetails.address}</p>
              
              <button className="edit-btn" onClick={() => setEditable(true)}>
                Edit Profile
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
