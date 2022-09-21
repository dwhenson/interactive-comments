import React from "react";

function User({ user, image, createdAt }) {
  return (
    <div className="user">
      <div>
        <img src={image} alt="" />
      </div>
      <p className="username">{user}</p>
      <p>{createdAt}</p>
    </div>
  );
}

export default User;
