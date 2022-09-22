import React from "react";
import User from "../User/User";
import Score from "../Score/Score";
import ButtonMinor from "../ButtonMinor/ButtonMinor";

function Comment({ content, createdAt, score, user }) {
  return (
    <div className="card">
      <div>
        <User
          user={user.username}
          image={user.image.webp}
          createdAt={createdAt}
        />
        <p className="content">{content}</p>
      </div>
      <Score score={score} />
      <ButtonMinor type={"reply"} />
    </div>
  );
}

export default Comment;
