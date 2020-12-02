import React from "react";
import "../styles/FeedItem.css";

function FeedItem({ post, callModal, setPayload }) {
  return (
    <div className="post">
      <button
        className="deleteBtn"
        onClick={() => {
          callModal();
          setPayload(post.id);
        }}
      >
        &times;
      </button>
      <h1 className="post-header">
        <span>{post.id + ". "}</span>
        {post.title}
      </h1>
      <p className="post-contents">{post.content}</p>
    </div>
  );
}

export default FeedItem;
