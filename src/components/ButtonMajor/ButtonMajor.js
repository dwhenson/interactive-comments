import React from "react";

function ButtonMajor({ action }) {
  return <button className="button-major">{action ?? "send"}</button>;
}

export default ButtonMajor;
