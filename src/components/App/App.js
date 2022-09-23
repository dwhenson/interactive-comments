import React from "react";
import Threads from "../Threads/Threads";
import Modal from "../Modal/Modal";
import AddComment from "../AddComment/AddComment";

function App() {
  const [threads, setThreads] = React.useState([]);
  const [currentUser, setcurrentUser] = React.useState({});
  const [showModal, setShowModal] = React.useState(false);
  console.log(threads);

  React.useEffect(() => {
    const data = require("../../data.json");
    setThreads(data.comments);
    setcurrentUser(data.currentUser);
  }, []);

  return (
    <>
      <Threads
        currentUser={currentUser}
        threads={threads}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <AddComment
        currentUser={currentUser}
        threads={threads}
        setThreads={setThreads}
      />
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
}

export default App;
