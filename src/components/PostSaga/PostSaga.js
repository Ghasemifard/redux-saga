import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostRequest } from "../../redux/posts/postActions";
const PostSaga = () => {
  const [postId, setPostId] = useState("");
  const { loading, data, error } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Redux-Saga Middleware</h1>
      <input
        type="text"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />
      <button onClick={() => dispatch(fetchPostRequest(postId ||1))}>
        get Post
      </button>
      {loading ? (
        <p>Loading</p>
      ) : error ? (
        <p>{error}</p>
      ) : data.title ? (
        <div>
          <p>post id:<br/>{data.id}</p>
          <p>post title:<br/>{data.title}</p>
          <p>post body:<br/>{data.body}</p>
        </div>
      ) : (
        <p>fetch some post!</p>
      )}
    </>
  );
};

export default PostSaga;
