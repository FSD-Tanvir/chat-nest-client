import axiosSecure from ".";

//create payment intent
export const createPaymentIntent = async (price) => {
  const { data } = await axiosSecure.post("/create-payment-intent", price);
  return data;
};

//update user badge after payment in db
export const updateBadge = async (email) => {
  console.log(email);
  const { data } = await axiosSecure.patch(`/users/${email}`);
  return data;
};
