import { useState } from "react";
import { useEffect } from "react";
import React, { forwardRef } from "react";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { TextField, Button } from "@material-ui/core";

import Comments from "./Comments";
import "../css/BlogPost.css";

const Post = forwardRef(
  ({ displayName, title, text, image, loved, comments, postedAt }, ref) => {
    const [love, setLove] = useState(loved);
    const [isLoved, setIsLoved] = useState(false);
    const [favClicked, setFavClicked] = useState(false);
    const [showComments, setShowComments] = useState(true);
    const [newComment, setNewComment] = useState("");

    useEffect(async () => {
      if (favClicked) {
        const post = {
          username: displayName,
          title: title,
          content: text,
          image: image,
          love: love,
          comments: comments,
          postedAt: postedAt,
        };
        const config = {
          method: "POST",
          body: JSON.stringify(post),
        };
        const response = await fetch(
          "https://posty-worker-api.jramakrishnan.workers.dev/api/updatepost",
          config
        );
        if (!response.ok) {
        } else {
          setFavClicked(false);
        }
      }
    });

    const favoriteClicked = async () => {
      setLove(isLoved ? love - 1 : love + 1);
      setIsLoved(!isLoved);
      setFavClicked(true);
    };

    const showCommentsClicked = () => {
      console.log(showComments);
      setShowComments(!showComments);
    };

    const sendClicked = async (e) => {
      e.preventDefault();
      if (newComment !== "") {
        comments.push(newComment);
        const post = {
          username: displayName,
          title: title,
          content: text,
          image: image,
          love: loved,
          comments: comments,
          postedAt: postedAt,
        };
        const config = {
          method: "POST",
          body: JSON.stringify(post),
        };
        const response = await fetch(
          "https://posty-worker-api.jramakrishnan.workers.dev/api/updatepost",
          config
        );
        if (!response.ok) {
        } else {
          setNewComment("");
        }
      }
    };
    return (
      <div className="post" ref={ref}>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                <span className="post__headerSpecial">@{displayName}</span>
                <span className="post__headerSpeciala"> {postedAt}</span>
              </h3>
            </div>
            <div className="post__headerText">
              <p>{title}</p>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            {isLoved ? (
              <FavoriteIcon
                fontSize="small"
                className="post__love"
                onClick={favoriteClicked}
              />
            ) : (
              <FavoriteBorderIcon fontSize="small" onClick={favoriteClicked} />
            )}
            <span className="post__Counter">{love} likes</span>
            <ChatBubbleOutlineIcon
              fontSize="small"
              onClick={showCommentsClicked}
            />
          </div>
          {showComments && (
            <div className="post__comments">
              <Comments comments={comments} />
            </div>
          )}
          {showComments && (
            <form className="post__form">
              <TextField
                label="add comment"
                size="small"
                className="post__input"
                placeholder="add comment"
                onChange={(e) => setNewComment(e.target.value)}
                value={newComment}
              />
              <Button className="post__send" onClick={sendClicked}>
                Comment
              </Button>
            </form>
          )}
        </div>
      </div>
    );
  }
);

export default Post;
