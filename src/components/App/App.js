import React from "react";
import Threads from "../Threads/Threads";
import AddComment from "../AddComment/AddComment";

function App() {
  const [threads, setThreads] = React.useState([]);

  React.useEffect(() => {
    const data = require("../../data.json");
    setThreads(data);
  }, []);

  return (
    <>
      <Threads threads={threads.comments} />
      <AddComment userData={threads.currentUser} />
    </>
  );
}

export default App;
