import React from "react";

function ButtonMajor({ action, setEditable }) {
  return (
    <button
      className={`button-major ${action}`}
      onClick={() => setEditable(false)}>
      {action}
    </button>
  );
}

export default ButtonMajor;
