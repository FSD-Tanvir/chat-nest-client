import axiosSecure from ".";

// save a Post data in db
export const addPost = async (postData) => {
  const { data } = await axiosSecure.post(`/posts`, postData);
  return data;
};
