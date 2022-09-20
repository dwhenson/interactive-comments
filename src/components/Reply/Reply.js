import React from "react";

function Reply({ data }) {
  const { content, createdAt, id, replies, score, user } = data;

  return <li key={id}>{content}</li>;
}

export default Reply;
