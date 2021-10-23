import React, { useState, useEffect } from "react";
import Post from "./Post";
import BlogPost from "./BlogPost";
import "../Homepage.css";

import FlipMove from "react-flip-move";

function Homepage() {
  const [posts, setBlogPosts] = useState([]);
  const [state, setState] = useState([]);

  useEffect(() => {
    const getBlogPosts = async () => {
      const response = await fetch(
        "https://posty-worker-api.jramakrishnan.workers.dev/api/posts"
      );
      const blogpostsResponse = await response.json();
      setBlogPosts(blogpostsResponse);
    };

    getBlogPosts();
  }, []);

  return (
    <div className="Homepage">
      <div className="Homepage_header">
        <h2>Posty</h2>
      </div>

      <Post stateChanger={setState} />

      <FlipMove>
        {posts.map((post) => (
          <BlogPost
            key={post.username + post.title}
            displayName={post.username}
            title={post.title}
            text={post.content}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Homepage;
