import React from "react";

function Score({ score, currentUser, thread }) {
  const [newScore, setNewScore] = React.useState(score);
  const [alreadyClicked, setAlreadyClicked] = React.useState({
    add: [],
    minus: [],
  });

  function increaseScore() {
    if (alreadyClicked.add.includes(currentUser.username)) return;
    setNewScore(newScore + 1);
    setAlreadyClicked({
      add: [...alreadyClicked.add, currentUser.username],
      minus: alreadyClicked.minus.filter(
        (item) => item !== currentUser.username
      ),
    });
  }

  function decreaseScore() {
    if (alreadyClicked.minus.includes(currentUser.username)) return;
    setNewScore(newScore - 1);
    setAlreadyClicked({
      add: alreadyClicked.add.filter((item) => item !== currentUser.username),
      minus: [...alreadyClicked.minus, currentUser.username],
    });
  }

  return (
    <div className="score">
      <button onClick={increaseScore}>+</button>
      <p>{newScore}</p>
      <button onClick={decreaseScore}>-</button>
    </div>
  );
}

export default Score;
