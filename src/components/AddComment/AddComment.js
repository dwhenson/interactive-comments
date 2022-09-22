import React from "react";
import ButtonMajor from "../ButtonMajor/ButtonMajor";

function AddComment({ userData }) {
  const [text, setText] = React.useState("");

  function handleAddComment(event) {
    event.preventDefault();
    console.log(text);
  }

  return (
    <form className="add-comment" onSubmit={handleAddComment}>
      <div className="card">
        {/* HACK need to add "?" here?*/}
        <img src={`./images/avatars/image-${userData?.username}.webp`} alt="" />
        <textarea
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <ButtonMajor action={"send"} />
      </div>
    </form>
  );
}

export default AddComment;
