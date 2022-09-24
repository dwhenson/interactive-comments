import React from "react";

function Modal({ setShowModal }) {
  function deleteItem() {
    setShowModal(false);
  }

  return (
    <div id="openModal" className="modalDialog">
      <div className="wrapper">
        <p className="heading">Delete Comment</p>
        <p className="content">
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className="modal-button-wrapper">
          <button
            className="button-major cancel"
            onClick={() => setShowModal(false)}>
            No, Cancel
          </button>
          <button
            className="button-major delete"
            onClick={(event) => deleteItem(event)}>
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
