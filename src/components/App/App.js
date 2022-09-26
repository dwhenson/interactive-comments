import React from "react";
import Threads from "../Threads/Threads";
import AddComment from "../AddComment/AddComment";

function App() {
  const [threads, setThreads] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    const data = require("../../data.json");
    setThreads(data.comments);
    setCurrentUser(data.currentUser);
  }, []);

  return (
    <>
      <Threads
        currentUser={currentUser}
        threads={threads}
        setThreads={setThreads}
      />
      <AddComment
        currentUser={currentUser}
        threads={threads}
        setThreads={setThreads}
      />
    </>
  );
}

export default App;
