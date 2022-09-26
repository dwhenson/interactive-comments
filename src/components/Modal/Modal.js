import React from "react";
import findItem from "../../helpers/findItem";
import addUpdatedItem from "../../helpers/addUpdatedItem";

function Modal({ setShowModal, thread, threads, setThreads, itemId }) {
  function deleteItem() {
    const reply = findItem(thread.replies, "replyId", itemId);
    if (reply) {
      const nextReplies = [
        ...thread.replies.filter((item) => String(item.replyId) !== itemId),
      ];
      const updatedThread = { ...thread, replies: nextReplies };
      const nextThreads = addUpdatedItem(threads, "id", updatedThread);
      return setThreads(nextThreads);
    }
    const comment = findItem(threads, "id", itemId);
    if (comment) {
      const nextThreads = [
        ...threads.filter((item) => String(item.id) !== itemId),
      ];
      console.log(threads, "id", "itemId");
      return setThreads(nextThreads);
    }
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
