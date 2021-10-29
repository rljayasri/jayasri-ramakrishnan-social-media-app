import React, { useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Button } from "@material-ui/core";

import "../css/CreatePost.css";

function CreatePost() {
  const [content, setContent] = useState("");
  const [photoClicked, setPhotoClicked] = useState(false);
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [image, setImage] = useState("");

  const createPost = async (e) => {
    e.preventDefault();
    const post = {
      username: username,
      title: title,
      content: content,
      image: image,
      love: 0,
      comments: [],
      postedAt: new Date().toLocaleString(),
    };
    console.log(post);
    const config = {
      method: "POST",
      body: JSON.stringify(post),
    };
    const response = await fetch(
      "https://posty-worker-api.jramakrishnan.workers.dev/api/makepost",
      config
    );
    if (!response.ok) {
      const error = await response.text();
      setError(error);
    } else {
      setTitle("");
      setContent("");
      setUsername("");
      setError("");
      setImage("");
      window.location.reload(false);
      window.location.reload(false);
    }
  };

  const onPhotoClick = async () => {
    setPhotoClicked(!photoClicked);
  };

  return (
    <div className="createpost">
      {error}
      <div className="creatpost_Wrapper">
        <div className="createpost_Top">
          <img
            className="createpost_Img"
            src="https://source.unsplash.com/random"
            alt=""
          />
          <input
            placeholder="Please enter Username"
            className="createpost_Input"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>

        <form>
          <div className="createpost_Text">
            <input
              placeholder="Your title..."
              className="createpost_Input"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="createpost_TextBox">
            <textarea
              placeholder="Your story here..."
              className="createpost_TextBox"
              onChange={(e) => setContent(e.target.value)}
              value={content}
            />
          </div>
          <hr className="createpostHr" />
          <div className="createpost_Footer">
            <div className="createpost_additional_wrapper">
              <div className="createpost_additional">
                <AddPhotoAlternateIcon
                  className="photo"
                  onClick={onPhotoClick}
                />
              </div>
              {photoClicked && (
                <input
                  placeholder="Optional photo/gif link: https://example.gif"
                  className="createpost_Photo"
                  onChange={(e) => setImage(e.target.value)}
                  value={image}
                />
              )}
            </div>
            <Button className="createpost_Button" onClick={createPost}>
              Publish
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
