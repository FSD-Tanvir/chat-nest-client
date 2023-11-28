import axiosSecure from ".";

//save user data in database
export const saveUser = async (user) => {
  const currentUser = {
    username: user?.displayName,
    email: user.email,
    badge: "bronze",
    status: "Verified",
  };
  const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser);

  return data;
};

//get token from server
export const getToken = async (email) => {
  const { data } = await axiosSecure.post(`/jwt`, email);
  console.log("token received from server ----->", data);
  return data;
};

//remove token
export const clearCookie = async () => {
  const { data } = await axiosSecure.get(`/logout`);
  return data;
};
