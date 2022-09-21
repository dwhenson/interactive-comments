import React from "react";

function Score({ score }) {
  const [newScore, setNewScore] = React.useState(score);

  return (
    <div className="score">
      <button onClick={() => setNewScore(newScore + 1)}>+</button>
      <p>{newScore}</p>
      <button onClick={() => setNewScore(newScore - 1)}>-</button>
    </div>
  );
}

export default Score;
