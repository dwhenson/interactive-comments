import React from "react";
import Replies from "../Replies/Replies";

function Comment({ data }) {
  const { content, createdAt, id, replies, score, user } = data;

  return (
    <li key={id}>
      {content}
      {replies.length > 1 && <Replies replies={replies} />}
    </li>
  );
}

export default Comment;
