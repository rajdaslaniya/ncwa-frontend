import React from "react";
import { Modal } from "react-bootstrap";

import "./LogoutModal.scss";
import SmallButtonComponent from "../../button/SmallButtonComponent";

const LogoutModal = ({ show, handleClose, handleSubmit }) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Logout</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure want to log out?</Modal.Body>
      <Modal.Footer>
        <SmallButtonComponent text="No" onClick={handleClose} />
        <SmallButtonComponent text="Yes" onClick={handleSubmit} />
      </Modal.Footer>
    </Modal>
  );
};

export default LogoutModal;
