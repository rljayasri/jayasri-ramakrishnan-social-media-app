import React, { forwardRef } from "react";
import "../BlogPost.css";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = forwardRef(
  ({ displayName, title, text, image }, ref) => {
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
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
