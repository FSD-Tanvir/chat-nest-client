import axiosSecure from ".";

// get all tag data from db
export const getAllTags = async () => {
  const { data } = await axiosSecure(`/tags`);
  return data;
};

// save a tag data in db
export const addTag = async (tag) => {
  const { data } = await axiosSecure.post(`/tags`, tag);
  return data;
};
