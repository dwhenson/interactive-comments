import React from "react";

function ChangeUser({ currentUser, setCurrentUser }) {
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
    <form className="change-user">
      <fieldset>
        <legend>Choose user</legend>
        <div className="input-wrapper">
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
        </div>
        <div className="input-wrapper">
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
        </div>
        <div className="input-wrapper">
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
        </div>
        <div className="input-wrapper">
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
        </div>
      </fieldset>
    </form>
  );
}

export default ChangeUser;
