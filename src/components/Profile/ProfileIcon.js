import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./ProfileIcon.css";

const ProfileIcon = ({ onRouteChange, toggleModal }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdownOpen = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="pa4 tc">
      <Dropdown isOpen={dropdownOpen} toggle={toggleDropdownOpen}>
        <DropdownToggle
          tag="span"
          data-toggle="dropdown"
          aria-expanded={dropdownOpen}
        >
          <img
            src="http://tachyons.io/img/logo.jpg"
            alt="avatar"
            className="br-100 ba h3 w3 dib"
          />
        </DropdownToggle>
        <DropdownMenu
          className="b--transparent shadow-5 profile-menu"
          style={{ marginTop: -5, backgroundColor: "rgba(255, 255, 255, 0.5)" }}
          right
        >
          <DropdownItem onClick={toggleModal}>View Profile</DropdownItem>
          <DropdownItem onClick={() => onRouteChange("signout")}>Sign Out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ProfileIcon;
