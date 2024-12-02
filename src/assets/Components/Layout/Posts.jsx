import React, { useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  const handlePost = () => {
    if (newPost.trim()) {
      setPosts([{ content: newPost, time: new Date().toLocaleString() }, ...posts]);
      setNewPost("");
    }
  };

  return (
    <div className="container">
      <h2>Create a Post</h2>
      <textarea
        rows="4"
        placeholder="What's on your mind?"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
      ></textarea>
      <button onClick={handlePost}>Post</button>

      <h3>Your Posts</h3>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map((post, index) => (
          <div key={index} className="post">
            <p>{post.content}</p>
            <small>Posted at {post.time}</small>
          </div>
        ))
      )}
    </div>
  );
};

export default Posts;
