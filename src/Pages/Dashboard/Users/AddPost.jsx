import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import useAuth from "../../../Component/Hooks/useAuth";
import { addPost } from "../../../api/posts";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const animatedComponents = makeAnimated();

const tagsOptions = [
  { value: "react", label: "React" },
  { value: "javascript", label: "JavaScript" },
  { value: "nodejs", label: "Node.js" },
  // Add more tag options as needed
];

const AddPost = () => {
  const { user } = useAuth();
  const [selectedTags, setSelectedTags] = useState([]);
  const navigate = useNavigate();

  const handleTagChange = (selectedOptions) => {
    setSelectedTags(selectedOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const postTitle = form.postTitle.value;
    const postDescription = form.postDescription.value;
    const time = Date.now()
    const upVote = 0;
    const downVote = 0;
    const author = {
      authorEmail: user?.email,
      authorName: user?.displayName,
      authorImage: user?.photoURL,
    };

    // Handle form submission logic here
    const postData = {
      postTitle,
      postDescription,
      selectedTags,
      time,
      upVote,
      downVote,
      author,
    };

    try {
      const data = await addPost(postData);
      console.log(data);
      toast.success("Post Added");
      navigate("/dashboard/my-posts");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="container mx-auto mt-8 p-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-md shadow-md">
      <h2 className="text-2xl text-white font-semibold mb-4 text-whit text-center">
        Create a New Post
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid lg:grid-cols-2 gap-5">
          {/* col 1 */}
          <div className="">
            {/*authorName*/}
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
            {/*authorEmail*/}
            <div>
              <label
                htmlFor="authorEmail"
                className="block text-sm font-medium text-white"
              >
                Author Email:
              </label>
              <input
                type="email"
                name="authorEmail"
                value={user?.email}
                id="authorEmail"
                placeholder="Enter your name"
                className="mt-1 p-2 w-full border border-white rounded-md focus:outline-none focus:border-blue-300 text-white"
                disabled
              />
            </div>

            {/* Author image */}
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
          </div>
          {/* col 2 */}
          <div className="">
            {/* post title */}
            <div>
              <label
                htmlFor="postTitle"
                className="block text-sm font-medium text-white"
              >
                Post Title:
              </label>
              <input
                type="text"
                name="postTitle"
                id="postTitle"
                placeholder="Enter post title"
                className="mt-1 p-2 w-full border border-white rounded-md focus:outline-none focus:border-blue-300 bg-inherit text-white"
              />
            </div>

            {/* post description */}
            <div>
              <label
                htmlFor="postDescription"
                className="block text-sm font-medium text-white"
              >
                Post Description:
              </label>
              <textarea
                name="postDescription"
                id="postDescription"
                rows={4}
                placeholder="Enter post description"
                className="mt-1 p-2 w-full border border-white rounded-md focus:outline-none focus:border-blue-300 bg-inherit text-white"
              />
            </div>
          </div>
        </div>

        {/* votes */}
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="upVote"
              className="block text-sm font-medium text-white"
            >
              Up Votes:
            </label>
            <input
              type="number"
              name="upVote"
              value={0}
              id="upVote"
              className="mt-1 p-2 w-full border border-white rounded-md focus:outline-none focus:border-blue-300 text-white"
              disabled
            />
          </div>
          <div>
            <label
              htmlFor="downVote"
              className="block text-sm font-medium text-white"
            >
              Down Votes:
            </label>
            <input
              type="number"
              name="downVote"
              value={0}
              id="downVote"
              className="mt-1 p-2 w-full border border-white rounded-md focus:outline-none focus:border-blue-300 text-white"
              disabled
            />
          </div>
        </div>

        {/* select tags */}
        <div>
          <label
            htmlFor="tags"
            className="block text-sm font-medium text-white"
          >
            Tags:
          </label>
          <Select
            id="tags"
            components={animatedComponents}
            options={tagsOptions}
            onChange={handleTagChange}
            isSearchable={false} // Disable the ability to type in the field
            placeholder="Select tags"
            className="mt-1 border border-white rounded-md focus:border-blue-300"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
