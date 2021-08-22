import React, { useEffect, useState } from "react";
import PostService from "../API/PostService";
import {
  Button,
  Loader,
  Modal,
  Pagination,
  PostFilter,
  PostForm,
  PostList,
  Select,
} from "../components";
import { useFetching } from "../hooks/useFetching";
import { useFiltredPosts } from "../hooks/usePosts";
import { getPagesCount } from "../utils/pages";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const sortedAndFiltredPosts = useFiltredPosts(
    posts,
    filter.sort,
    filter.query
  );

  const [fetchPosts, loading, error] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  };

  useEffect(() => {
    fetchPosts(limit, page);
  }, [limit]);

  return (
    <div className="App">
      <Button onClick={() => setModal(true)} style={{ marginTop: "15px" }}>
        Add New Post
      </Button>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </Modal>

      <hr style={{ margin: "15px 0" }} />

      <PostFilter filter={filter} setFilter={setFilter} />

      <Select
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Posts count"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: -1, name: "Show All Posts" },
        ]}
      />

      {error && <h1>Oops, something wrong here! {error}</h1>}

      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <Loader />
        </div>
      )}
      <PostList
        remove={removePost}
        posts={sortedAndFiltredPosts}
        title="The List of Posts"
      />

      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default Posts;
