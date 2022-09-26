import React from "react";
import findItem from "../../helpers/findItem";

function Score({ score, currentUser, thread, threads, itemId, setItemId }) {
  const [newScore, setNewScore] = React.useState(score);
  const [alreadyClicked, setAlreadyClicked] = React.useState({
    add: [],
    minus: [],
  });

  function checkIfCurrentUser(itemId) {
    const reply = findItem(thread.replies, "replyId", itemId);
    if (reply) {
      return currentUser.username === reply.user.username;
    }
    const comment = findItem(threads, "id", itemId);
    if (comment) {
      return currentUser.username === comment.user.username;
    }
  }

  // TODO refactor into one function?
  function increaseScore(event) {
    const nextItemId = event.target.closest(".card").id;
    setItemId(nextItemId);
    if (!!checkIfCurrentUser(nextItemId)) return;
    if (alreadyClicked.add.includes(currentUser.username)) return;

    setNewScore(newScore + 1);
    setAlreadyClicked({
      add: [...alreadyClicked.add, currentUser.username],
      minus: [
        ...alreadyClicked.minus.filter((item) => item !== currentUser.username),
      ],
    });
  }

  function decreaseScore(event) {
    const nextItemId = event.target.closest(".card").id;
    setItemId(nextItemId);
    if (!!checkIfCurrentUser(nextItemId)) return;
    if (alreadyClicked.minus.includes(currentUser.username)) return;

    setNewScore(newScore - 1);
    setAlreadyClicked({
      add: [
        ...alreadyClicked.add.filter((item) => item !== currentUser.username),
      ],
      minus: [...alreadyClicked.minus, currentUser.username],
    });
  }

  return (
    <div className="score">
      <button onClick={(event) => increaseScore(event)}>+</button>
      <p>{newScore}</p>
      <button onClick={(event) => decreaseScore(event)}>-</button>
    </div>
  );
}

export default Score;
