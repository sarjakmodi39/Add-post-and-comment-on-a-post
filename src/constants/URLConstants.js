import { id } from "./constants";
export const urlConstant = {
  createPost: `https://gorest.co.in/public/v2/users/${id}/posts`,
  createComment: (postid) =>
    `https://gorest.co.in/public/v2/posts/${postid}/comments`,
  listPosts: `https://gorest.co.in/public/v2/users/${id}/posts`,
  retrievesComments: (postid) =>
    `https://gorest.co.in/public/v2/posts/${postid}/comments`,
};
