import React, { useState } from "react";
import Button from "../UI/button";
import Input from "../UI/input";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = {
      ...post,
      id: Date.now(),
    };

    create(newPost);

    setPost({ title: "", body: "" });
  };

  return (
    <form action="#">
      {/* Контролируемые инпуты */}
      <Input
        type="text"
        value={post.title}
        placeholder="Enter your title"
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <Input
        type="text"
        value={post.body}
        placeholder="Enter your description"
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />

      <Button onClick={addNewPost}>Add</Button>
    </form>
  );
};

export default PostForm;
