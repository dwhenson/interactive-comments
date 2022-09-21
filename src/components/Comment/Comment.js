import React from "react";
import User from "../User/User";
import Score from "../Score/Score";

function Comment({ content, createdAt, score, user }) {
  return (
    <div className="reply">
      <User
        user={user.username}
        image={user.image.webp}
        createdAt={createdAt}
      />
      <p>{content}</p>
      <Score score={score} />
    </div>
  );
}

export default Comment;
