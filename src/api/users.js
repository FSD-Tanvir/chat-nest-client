import axiosSecure from ".";

//get all users
export const getAllUsers = async () => {
  const { data } = await axiosSecure.get(`/users`);
  return data;
};
