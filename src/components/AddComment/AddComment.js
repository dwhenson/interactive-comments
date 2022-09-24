import React from "react";
import ButtonMajor from "../ButtonMajor/ButtonMajor";

function AddComment({
  currentUser,
  thread,
  threads,
  setThreads,
  action = "send",
  setReply,
}) {
  const [text, setText] = React.useState("");
  const textarea = React.useRef();

  React.useEffect(() => {
    textarea.current.scrollIntoView();
    textarea.current.focus();
  }, []);

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
      const addedReply = [...thread.replies, newItem];
      const updatedThread = { ...thread, replies: addedReply };
      const nextThreads = threads.map((thread) =>
        thread.id !== updatedThread.id ? thread : updatedThread
      );
      setThreads(nextThreads);
      setReply(false);
      // console.log(nextThreads);
    }

    setText("");
  }

  return (
    <form className="add-comment" onSubmit={handleAddComment}>
      <div className="card">
        <div className="card-wrapper">
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
      </div>
    </form>
  );
}

export default AddComment;
