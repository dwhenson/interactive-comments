import React from "react";
import findItem from "../../helpers/findItem";
import addUpdatedItem from "../../helpers/addUpdatedItem";

function ButtonMajor({
  action,
  setEditable,
  newContent,
  itemId,
  thread,
  threads,
  setThreads,
}) {
  function updateContent() {
    if (setEditable) {
      setEditable(false);
    }

    if (action === "update") {
      const reply = findItem(thread.replies, "replyId", itemId);
      if (reply) {
        const newReply = { ...reply, content: newContent };
        const nextReplies = addUpdatedItem(thread.replies, "replyId", newReply);
        const newThread = { ...thread, replies: nextReplies };
        const nextThreads = addUpdatedItem(threads, "id", newThread);
        return setThreads(nextThreads);
      }

      const comment = findItem(threads, "id", itemId);
      if (comment) {
        const newComment = { ...comment, content: newContent };
        const nextThreads = addUpdatedItem(threads, "id", newComment);
        return setThreads(nextThreads);
      }
    }
  }

  return (
    <button className={`button-major ${action}`} onClick={updateContent}>
      {action}
    </button>
  );
}

export default ButtonMajor;
