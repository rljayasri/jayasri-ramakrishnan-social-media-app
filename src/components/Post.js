import React, { useState } from "react";
import "../Post.css";
import { Avatar, Button } from "@material-ui/core";

function Post({ stateChanger }) {
  let body = "";
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const createPost = async (e) => {
    e.preventDefault();
    const post = {
      username: username,
      title: title,
      content: content,
    };
    console.log(JSON.stringify(post));
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
      stateChanger("new data");
      window.location.reload(false);
    }
  };

  return (
    <div className="PostIt">
      <h2>{error}</h2>
      <form>
        <div className="PostIt__input">
          <Avatar src="" />
          <input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            name="username"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="PostIt_title">
          <input
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            name="title"
            type="text"
            autoFocus={true}
          />
        </div>

        <textarea
          className="writeInput writeText"
          onChange={(e) => setContent(e.target.value)}
          value={content}
          name="content"
          placeholder="Tell your story..."
          type="text"
        />
        <Button type="submit" onClick={createPost} className="PostIt__Create">
          Publish
        </Button>
      </form>
    </div>
  );
}

export default Post;
