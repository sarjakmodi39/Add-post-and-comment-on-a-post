import CreatePost from "./CreatePost";
import { urlConstant } from "../constants/URLConstants";
import { useEffect, useState } from "react";
import { makeGetAPICAll } from "../services/api";
import Post from "./post";

const RetrieveUserPost = () => {
  const [userPost, setUserPost] = useState([]);
  useEffect(() => {
    getUserPost();
  }, []);

  const getUserPost = () => {
    makeGetAPICAll(urlConstant.listPosts).then((result) => {
      setUserPost(result);
    });
  };
  return (
    <>
      <CreatePost onSave={getUserPost}></CreatePost>
      {userPost.map((data) => {
        return <Post data={data}></Post>;
      })}
    </>
  );
};
export default RetrieveUserPost;
