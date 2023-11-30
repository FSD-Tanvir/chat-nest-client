import axiosSecure from ".";

// save a Post data in db
export const addPost = async (postData) => {
  const { data } = await axiosSecure.post(`/posts`, postData);
  return data;
};
// save a Post data in db
export const getAllPosts = async () => {
  const { data } = await axiosSecure(`/posts/latest`);
  return data;
};
// save a Post data in db
export const getPostsByPopularity = async () => {
  const { data } = await axiosSecure(`/posts/popular`);
  return data;
};
