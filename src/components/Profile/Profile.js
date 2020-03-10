import React, { useState } from "react";
import axios from "axios";
import "./Profile.css";

const Profile = ({ isProfileOpen, toggleModal, user, loadUser }) => {
  const [userData, setUserData] = useState({
    name: user.name,
    age: user.age,
    pet: user.pet,
  });

  const onFormChange = e => {
    const targetName = e.target.name.replace("user-", "");
    setUserData({
      ...userData,
      [targetName]: e.target.value
    });
  };

  const updateProfile = data => {
    axios.post(
      `http://localhost:3000/profile/${user.id}`,
      JSON.stringify({ formInput: data }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: window.sessionStorage.getItem("token")
        }
      }
    ).then(res => {
      if (res.status === 200 || res.status === 304) {
        toggleModal();
        loadUser({ ...user, ...userData });
      }
    }).catch(console.error);
  };

  return (
    <div className="profile-modal">
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
        <main className="pa4 black-80 w-80">
          <img
            src="http://tachyons.io/img/logo.jpg"
            alt="avatar"
            className="h3 w3 dib"
          />
          <h1>{userData.name || user.name}</h1>
          <h4>Images Submitted: {user.entries}</h4>
          <p>Member since: {new Date(user.joined).toLocaleDateString()}</p>
          <hr />
          <label htmlFor="user-name" className="mt2 fw6">
            Name
          </label>
          <input
            className="pa2 ba w-100"
            type="text"
            name="user-name"
            id="user-name"
            value={userData.name}
            onChange={onFormChange}
          />
          <label htmlFor="user-age" className="mt2 fw6">
            Age
          </label>
          <input
            className="pa2 ba w-100"
            type="number"
            name="user-age"
            id="age"
            value={userData.age}
            onChange={onFormChange}
          />
          <label htmlFor="user-pet" className="mt2 fw6">
            Pet
          </label>
          <input
            className="pa2 ba w-100"
            type="text"
            name="user-pet"
            id="pet"
            value={userData.pet}
            onChange={onFormChange}
          />
          <div
            className="mt4"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <button
              className="b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20"
              onClick={() => updateProfile(userData)}
            >
              Save
            </button>
            <button
              className="b pa2 grow pointer hover-white w-40 bg-light-red b--black-20"
              onClick={toggleModal}
            >
              Cancel
            </button>
          </div>
        </main>
        <div className="modal-close" onClick={toggleModal}>
          &times;
        </div>
      </article>
    </div>
  );
};

export default Profile;
