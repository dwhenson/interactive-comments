import React from "react";
import ButtonMajor from "../ButtonMajor/ButtonMajor";

function AddComment({
  currentUser,
  threads,
  setThreads,
  action = "send",
  replies,
  setReplies,
  setReply,
}) {
  const [text, setText] = React.useState("");
  const textarea = React.useRef();

  React.useEffect(() => {
    textarea.current.scrollIntoView();
    textarea.current.focus();
  }, [threads]);

  // HACK need to add "?" here?
  function handleAddComment(event) {
    event.preventDefault();
    if (!text) return;

    const newItem = {
      id: crypto.randomUUID().slice(0, 6),
      content: text,
      createdAt: "Just now",
      score: 0,
      user: {
        image: {
          png: `./images/avatars/image-${currentUser?.username}.png`,
          webp: `./images/avatars/image-${currentUser?.username}.webp`,
        },
        username: currentUser?.username,
      },
    };

    if (action === "send") {
      const nextThreads = [...threads, { ...newItem, replies: [] }];
      setThreads(nextThreads);
    }

    if (action === "reply") {
      const nextReplies = [...replies, newItem];
      setReplies(nextReplies);
      setReply(false);
    }

    setText("");
  }

  return (
    <form className="add-comment" onSubmit={handleAddComment}>
      <div className="card">
        {/* HACK need to add "?" here?*/}
        <img
          src={`./images/avatars/image-${currentUser?.username}.webp`}
          alt=""
        />
        <textarea
          ref={textarea}
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <ButtonMajor action={action} />
      </div>
    </form>
  );
}

export default AddComment;
