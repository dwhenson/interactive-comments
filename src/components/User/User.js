import React from "react";

function User({ user, image, createdAt }) {
  return (
    <div>
      <div>
        <img src={image} alt="" />
        <p>{user}</p>
        <p>{createdAt}</p>
      </div>
    </div>
  );
}

export default User;
