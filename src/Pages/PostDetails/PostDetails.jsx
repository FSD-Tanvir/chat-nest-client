/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
// import { ShareButton } from "react-share";

const PostDetails = () => {
  const post = useLoaderData();
  const { author, postTitle, postDescription, tag, time, upvote, downvote } =
    post;

  const user = {
    isLoggedIn: true,
    username: "JohnDoe",
  };

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [userVote, setUserVote] = useState(null);

  const handleVote = (type) => {
    if (user.isLoggedIn) {
      setUserVote(type);
    } else {
      alert("Please log in to vote.");
    }
  };

  const handleComment = () => {
    if (user.isLoggedIn && comment.trim() !== "") {
      setComments((prevComments) => [
        ...prevComments,
        { user: user.username, text: comment },
      ]);
      setComment("");
    } else {
      alert("Please log in to comment.");
    }
  };

  // const shareUrl = `http://localhost:5173/post/${post._id}`;

  return (
    <div className="max-w-2xl mx-auto my-8 p-6 bg-white shadow-lg rounded-md">
      <div className="flex flex-col sm:flex-row items-center mb-4">
        <img
          src={author.authorImage}
          alt={author.authorName}
          className="h-10 w-10 rounded-full mb-4 sm:mb-0 sm:mr-4"
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
        <p className="text-gray-700">{postDescription}</p>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-x-2 sm:mt-4">
          <span className="bg-gray-200 text-xs px-2 py-1 rounded">{tag}</span>
          <p className="text-xs text-gray-500">
            {userVote !== null ? "Voted" : ""}
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-x-4 mt-6">
        <button
          onClick={() => handleVote("up")}
          className={`vote-button ${userVote === "up" ? "voted" : ""}`}
        >
          <FaThumbsUp />
        </button>
        <button
          onClick={() => handleVote("down")}
          className={`vote-button ${userVote === "down" ? "voted" : ""}`}
        >
          <FaThumbsDown />
        </button>
        {/* <ShareButton url={shareUrl} /> */}
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Comments</h3>
        {comments.map((comment, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md mb-4">
            <p className="font-semibold">{comment.user}</p>
            <p>{comment.text}</p>
          </div>
        ))}
        {user.isLoggedIn && (
          <div className="add-comment mt-6">
            <textarea
              rows="3"
              placeholder="Add your comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-2 border rounded-md"
            ></textarea>
            <button
              onClick={handleComment}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Add Comment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostDetails;
