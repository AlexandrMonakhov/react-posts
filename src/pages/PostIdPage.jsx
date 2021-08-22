import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { Loader } from "../components";
import { useFetching } from "../hooks/useFetching";

const PostIdPage = () => {
  const { id } = useParams();

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, loading, error] = useFetching(async (id) => {
    const { data } = await PostService.getById(id);
    setPost(data);
  });
  const [fetchCommentsById, commentsLoading, commentsError] = useFetching(
    async (id) => {
      const { data } = await PostService.getCommentsByPostId(id);
      setComments(data);
    }
  );

  useEffect(() => {
    fetchPostById(id);
    fetchCommentsById(id);
  }, []);

  return (
    <>
      <h1>
        {post.id}. {post.title}
      </h1>
      {loading ? (
        <Loader />
      ) : (
        <>
          <hr style={{ marginTop: "30px", width: "50%" }} />
          <h2>Comments</h2>
          {commentsLoading ? (
            <Loader />
          ) : (
            <div className="comments">
              {comments.map((comment) => (
                <div className="comment" key={comment.id}>
                  <h3 className="comment__name">{comment.email}</h3>
                  <p className="comment__description">{comment.body}</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default PostIdPage;
