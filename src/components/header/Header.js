import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

import "./Header.scss";
import {
  DownArrow,
  headerLogo,
  logOutImage,
  personImage,
} from "../../assets/images";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/actions/user.action";
import { useNavigate } from "react-router-dom";
import LogoutModal from "../Common/modal/logout/LogoutModal";

const Header = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const logout = () => {
    dispatch(logoutUser());
    navigation("/");
  };

  return (
    <div className="navbar navbar-expand-lg header sticky-top">
      <div className="row g-0 w-100">
        <div className="col-lg-2"></div>
        <div className="col-lg-8 header-container px-2">
          <div className="left-header">
            <img src={headerLogo} className="header-logo" alt="header-logo" />
            <label>MHFA</label>
          </div>
          <div className="right-header">
            <Dropdown className="user-profile-dropdown" align="end">
              <Dropdown.Toggle className="user-dropdown" id="dropdown-basic">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                  className="user-image"
                  alt="user"
                />
                <label className="user-name">John Deo</label>
                <DownArrow />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <img
                    src={personImage}
                    className="dropdown-image"
                    alt="person"
                  />
                  My Profile
                </Dropdown.Item>
                <hr />
                <Dropdown.Item onClick={openModal}>
                  <img
                    src={logOutImage}
                    className="dropdown-image"
                    alt="logout"
                  />
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
      <LogoutModal
        show={showModal}
        handleClose={closeModal}
        handleSubmit={logout}
      />
    </div>
  );
};

export default Header;
