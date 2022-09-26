import React from "react";
import Threads from "../Threads/Threads";
import AddComment from "../AddComment/AddComment";
import ChangeUser from "../ChangeUser/ChangeUser";
const data = require("../../data.json");

function App() {
  const [threads, setThreads] = usePersistState(data.comments, "comments");
  const [currentUser, setCurrentUser] = usePersistState(
    data.currentUser,
    "user"
  );

  function usePersistState(defaultValue, key) {
    const [value, setValue] = React.useState(() => {
      const persistantValue = window.localStorage.getItem(key);
      return persistantValue !== null
        ? JSON.parse(persistantValue)
        : defaultValue;
    });

    React.useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
  }

  return (
    <>
      <h1 className="visually-hidden">Comments</h1>
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
      <ChangeUser currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </>
  );
}

export default App;
