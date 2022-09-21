import React from "react";
import Thread from "../Thread/Thread";

function Threads() {
  const [threads, setThreads] = React.useState([]);

  React.useEffect(() => {
    const data = require("../../data.json");
    setThreads(data.comments);
  }, []);

  return (
    // eslint-disable-next-line
    <ul role="list" className="comments">
      {threads.map((thread) => (
        <Thread key={thread.id} thread={thread} />
      ))}
    </ul>
  );
}

export default Threads;
