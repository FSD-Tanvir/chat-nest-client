/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
// import { ShareButton } from "react-share";

const PostDetails = () => {
  const post = useLoaderData();
  const {
    author,
    postTitle,
    postDescription,
    selectedTags,
    time,
    upVotes,
    downVotes,
  } = post;

  const [userVote, setUserVote] = useState(null);

  const handleVote = (type) => {
    setUserVote(type);
  };

  const handleComment = () => {};

  // const shareUrl = `http://localhost:5173/post/${post._id}`;

  return (
    <div className="max-w-2xl mx-auto my-8 p-6 bg-white shadow-lg rounded-md">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={author.authorImage}
          alt={author.authorName}
          className="h-10 w-10 rounded-full"
        />
        <div>
          <p className="font-semibold">{author.authorName}</p>
          <p className="text-gray-500 text-sm">
            {new Date(time).toLocaleString()}
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">{postTitle}</h2>
        <p className="text-gray-700 mb-3">{postDescription}</p>
        <span className="bg-gray-200 text-xs px-2 py-1 rounded">
          {selectedTags.label}
        </span>
      </div>
      <div className="flex items-center space-y-4 space-x-4 mt-6">
        <button onClick={() => handleVote("up")}>
          <FaThumbsUp />
        </button>
        <button onClick={() => handleVote("down")}>
          <FaThumbsDown />
        </button>
        {/* <ShareButton url={shareUrl} /> */}
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Comments</h3>
        {
          // comments.map((comment, index) => (
          //   <div key={index} className="bg-gray-100 p-4 rounded-md mb-4">
          //     <p className="font-semibold">{comment.user}</p>
          //     <p>{comment.text}</p>
          //   </div>
          // ))
        }

        <div className="add-comment mt-6">
          <textarea
            rows="3"
            placeholder="Add your comment..."
            className="w-full p-2 border rounded-md"
          ></textarea>
          <button
            onClick={handleComment}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
