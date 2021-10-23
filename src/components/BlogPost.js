import React, { forwardRef } from "react";
import "../BlogPost.css";

const BlogPost = forwardRef(({ displayName, title, text }, ref) => {
  return (
    <div className="post" ref={ref}>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              <span className="post__headerSpecial">@{displayName}</span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{title}</p>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default BlogPost;
