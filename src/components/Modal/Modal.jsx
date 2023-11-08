import React from "react";

import "../../assets/styles/components/modal.scss";

function Modal({ setShowModal }) {
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <button className="modal__close" onClick={closeModal}>
          &times;
        </button>
        <p className="modal__message">
          Thank you for your inquiry. We will contact you shortly!
        </p>
      </div>
    </div>
  );
}

export default Modal;
