import React from "react";

function Modal({ setShowModal, thread, threads, setThreads, itemId }) {
  function deleteItem() {
    if (thread.replies.find((item) => String(item.replyId) === itemId)) {
      const nextReplies = [
        ...thread.replies.filter((item) => String(item.replyId) !== itemId),
      ];
      const updatedThread = { ...thread, replies: nextReplies };
      const nextThreads = threads.map((thread) =>
        thread.id !== updatedThread.id ? thread : updatedThread
      );
      return setThreads(nextThreads);
    }
    const nextThreads = [
      ...threads.filter((item) => String(item.id) !== itemId),
    ];
    return setThreads(nextThreads);
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
          <button className="button-major delete" onClick={() => deleteItem()}>
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
