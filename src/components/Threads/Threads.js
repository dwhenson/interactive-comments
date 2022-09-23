import React from "react";
import Thread from "../Thread/Thread";

function Threads({ threads, currentUser, showModal, setShowModal }) {
  return (
    // eslint-disable-next-line
    <ul role="list" className="comments">
      {/* HACK need to add "?" here?*/}
      {threads?.map((thread) => (
        <Thread
          key={thread.id}
          thread={thread}
          currentUser={currentUser}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      ))}
    </ul>
  );
}

export default Threads;
