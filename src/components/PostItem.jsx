import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../UI/button";

const PostItem = ({ post, remove }) => {
  const { id, title, body } = post;

  const router = useHistory();

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {id}. {title}
        </strong>
        <p>{body}</p>
      </div>
      <div
        className="post-btns"
        style={{
          display: "flex",
          justifyContent: "space-between",
          minWidth: "180px",
          flex: "1",
        }}
      >
        <Button onClick={() => router.push(`/posts/${id}`)}>Открыть</Button>
        <Button onClick={() => remove(post)}>Удалить</Button>
      </div>
    </div>
  );
};

export default PostItem;
