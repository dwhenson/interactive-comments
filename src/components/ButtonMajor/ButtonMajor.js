import React from "react";

function ButtonMajor({
  action,
  setEditable = () => console.log("ran"),
  newContent,
  itemId,
  thread,
  threads,
  setThreads,
}) {
  // const [itemId, SetItemId] = React.useState();

  function handleButtonClick() {
    setEditable(false);
    if (action === "update") {
      if (thread.replies.find((item) => String(item.replyId) === itemId)) {
        const item = [...thread.replies].find(
          (item) => String(item.replyId) === itemId
        );
        const updatedItem = { ...item, content: newContent };
        const nextReplies = thread.replies.map((reply) =>
          reply.replyId !== updatedItem.replyId ? reply : updatedItem
        );
        const updatedThread = { ...thread, replies: nextReplies };
        const nextThreads = threads.map((thread) =>
          thread.id !== updatedThread.id ? thread : updatedThread
        );
        return setThreads(nextThreads);
      } else {
        const comment = thread.find((item) => String(item.id) === itemId);
        const updatedComment = { ...comment, content: newContent };
        const nextThreads = threads.map((thread) =>
          thread.id !== updatedComment.id ? thread : updatedComment
        );
        return setThreads(nextThreads);
      }
    }
  }

  return (
    <button className={`button-major ${action}`} onClick={handleButtonClick}>
      {action}
    </button>
  );
}

export default ButtonMajor;
