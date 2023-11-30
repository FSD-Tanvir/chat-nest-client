import axiosSecure from ".";

//get all announcements
export const getAllAnnouncements = async () => {
  const { data } = await axiosSecure(`/announcements`);
  return data;
};

// save an announcements data in db
export const addAnnouncement = async (announcement) => {
  const { data } = await axiosSecure.post(`/announcements`, announcement);
  return data;
};
