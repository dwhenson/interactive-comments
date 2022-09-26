import React from "react";
import Threads from "../Threads/Threads";
import AddComment from "../AddComment/AddComment";
import ChangeUser from "../ChangeUser/ChangeUser";

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
      <ChangeUser currentUser={currentUser} setCurrentUser={setCurrentUser} />
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
