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

  function changeUser(value) {
    setCurrentUser({
      image: {
        png: `./images/avatars/image-${value}.png`,
        webp: `./images/avatars/image-${value}.webp`,
      },
      username: `${value}`,
    });
  }

  return (
    <>
      <form>
        <fieldset>
          <legend>Choose user</legend>
          <input
            type="radio"
            name="amyrobson"
            id="amyrobson"
            value="amyrobson"
            checked={currentUser.username === "amyrobson"}
            onChange={(event) => {
              changeUser(event.target.value);
            }}
          />
          <label htmlFor="amyrobson">Amy Robson</label>
          <input
            type="radio"
            name="juliusomo"
            id="juliusomo"
            value="juliusomo"
            checked={currentUser.username === "juliusomo"}
            onChange={(event) => {
              changeUser(event.target.value);
            }}
          />
          <label htmlFor="juliusomo">Julius Omo</label>
          <input
            type="radio"
            name="maxblagun"
            id="maxblagun"
            value="maxblagun"
            checked={currentUser.username === "maxblagun"}
            onChange={(event) => {
              changeUser(event.target.value);
            }}
          />
          <label htmlFor="maxblagun">Max Blagun</label>
          <input
            type="radio"
            name="ramsesmiron"
            id="ramsesmiron"
            value="ramsesmiron"
            checked={currentUser.username === "ramsesmiron"}
            onChange={(event) => {
              changeUser(event.target.value);
            }}
          />
          <label htmlFor="ramsesmiron">Ramses Miron</label>
        </fieldset>
      </form>

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
