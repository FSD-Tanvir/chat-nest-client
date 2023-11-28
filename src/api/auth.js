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
// console.log(user,currentUser);
};
