import React from "react";
import Reply from "../Reply/Reply";

function Replies({ replies }) {
  return (
    // eslint-disable-next-line
    <ul role="list">
      {replies.map((reply) => (
        <Reply data={reply} />
      ))}
    </ul>
  );
}

export default Replies;
