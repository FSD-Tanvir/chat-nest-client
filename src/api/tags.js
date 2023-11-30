import axiosSecure from ".";

export const getAllTags = async () => {
    const { data } = await axiosSecure(`/tags`);
    return data;
  };