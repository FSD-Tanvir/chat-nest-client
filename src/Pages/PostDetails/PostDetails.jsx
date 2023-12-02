/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../Component/Hooks/useAuth";
import axios from "axios";
import axiosSecure from "../../api";
// import { ShareButton } from "react-share";

const PostDetails = () => {

  const { user } = useAuth();
  const[allComments, setAllComments] = useState()


  const post = useLoaderData();
  const {
    _id,
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

  const handleComment = (e) => {
    e.preventDefault();
    const form = e.target;
    const postId = _id;
    const comment = form.comment.value;
    const commenter = user.displayName;

    const commentData = {
      postId,
      comment,
      commenter,
    };

    axiosSecure
      .post("/comments", commentData)
      .then(() => {
        form.reset();
      })
      .catch((err) => console.log(err));
  };

  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const response = await fetch(`http://localhost:5000/comments/${_id}`)
        if(!response.ok){
          throw new Error('Network Error')
        }
        const fetchData = await response.json()
        setAllComments(fetchData)
      }
      catch (error){
        console.log(error);
      }
    }
    fetchData()
  },[_id])



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
          allComments ? 
          allComments.map((comment) => (
            <div key={comment._id} className="bg-gray-100 p-4 rounded-md mb-4">
              <p className="font-semibold">{comment.commenter}</p>
              <p>{comment.comment}</p>
            </div>
          )): null
        }

        <form onSubmit={handleComment} className="add-comment mt-6">
          <textarea
            rows="3"
            name="comment"
            placeholder="Add your comment..."
            className="w-full p-2 border rounded-md"
          ></textarea>
          <button
            type="submit"
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Add Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostDetails;
