import React, { useState, useEffect } from "react";
import CreatePost from "./CreatePost";
import BlogPost from "./BlogPost";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FlipMove from "react-flip-move";
import "../css/Homepage.css";

function Homepage() {
  const [posts, setBlogPosts] = useState([]);

  useEffect(() => {
    const getBlogPosts = async () => {
      const response = await fetch(
        "https://posty-worker-api.jramakrishnan.workers.dev/api/posts"
      );
      const blogpostsResponse = await response.json();
      console.log(blogpostsResponse);
      const postsByTime = blogpostsResponse.sort(function (a, b) {
        return a.postedAt > b.postedAt ? -1 : 1;
      });
      console.log(postsByTime);
      setBlogPosts(postsByTime);
    };

    getBlogPosts();
  }, []);

  return (
    <div className="Homepage">
      <div className="Homepage_header">
        <AutoAwesomeIcon />
        <span className="Homepage_header">Posty</span>
        <span className="Homepage_headerwarning">
          *Changes may take up to 60 seconds to reflect in KV as per
          <a href="https://developers.cloudflare.com/workers/runtime-apis/kv">
            {" "}
            docs
          </a>
          . If your post is not seen. Please refresh*
        </span>
      </div>

      <CreatePost />

      <FlipMove>
        {posts.map((post) => (
          <BlogPost
            key={post.username + post.title}
            displayName={post.username}
            title={post.title}
            text={post.content}
            image={post.image}
            loved={post.love}
            comments={post.comments}
            postedAt={post.postedAt}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Homepage;
