import useAuth from "../../../Component/Hooks/useAuth";
import { addAnnouncement } from "../../../api/announcements";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const MakeAnnouncement = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const authorName = user?.displayName;
    const authorImage = user?.photoURL;

    const announcement = {
      authorImage,
      authorName,
      title,
      description,
    };

    try {
      const data = await addAnnouncement(announcement);
      console.log(data);
      toast.success("Announcement Added");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="px-2 py-5">
      <div className="max-w-lg mx-auto mt-8 p-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-white">
          Create Announcement
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="postTitle"
              className="block text-sm font-medium text-white"
            >
              Author Image URL:
            </label>
            <input
              type="text"
              name="authorImage"
              value={user?.photoURL}
              id="authorImage"
              placeholder="Enter your image link"
              className="mt-1 p-2 w-full border border-white rounded-md focus:outline-none focus:border-blue-300 text-white"
              disabled
            />
          </div>
          <div>
            <label
              htmlFor="authorName"
              className="block text-sm font-medium text-white"
            >
              Author Name:
            </label>
            <input
              type="text"
              name="authorName"
              value={user?.displayName}
              id="authorName"
              placeholder="Enter your name"
              className="mt-1 p-2 w-full border border-white rounded-md focus:outline-none focus:border-blue-300 text-white"
              disabled
            />
          </div>

          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-white"
            >
              Title:
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Enter announcement title"
              className="mt-1 p-2 w-full border border-white rounded-md focus:outline-none focus:border-blue-300 bg-inherit text-white"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-white"
            >
              Description:
            </label>
            <textarea
              name="description"
              id="description"
              rows={4}
              placeholder="Enter description"
              className="mt-1 p-2 w-full border border-white rounded-md focus:outline-none focus:border-blue-300 bg-inherit text-white"
            />
          </div>

          <button
            type="submit"
            className="bg-purple-900 text-white px-4 py-2 rounded-md hover:bg-purple-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MakeAnnouncement;
