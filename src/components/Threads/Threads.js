import React from "react";
import Thread from "../Thread/Thread";

function Threads({ threads }) {
  return (
    // eslint-disable-next-line
    <ul role="list" className="comments">
      {/* HACK need to add "?" here?*/}
      {threads?.map((thread) => (
        <Thread key={thread.id} thread={thread} />
      ))}
    </ul>
  );
}

export default Threads;
