/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
const MyPostsTable = ({ data }) => {
  const MyPosts = data;
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th className="min-w-[200px]">Title</th>
            <th>Votes</th>
            <th>Comments</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* rows*/}
          {MyPosts.map((myPost) => {
            const voteCount = myPost.upVote + myPost.downVote;
            return (
              <tr key={myPost._id}>
                <td>
                  <div className="flex items-center space-x-3 ">
                    <div>
                      <div className="font-bold">{myPost.postTitle}</div>
                    </div>
                  </div>
                </td>
                <td className="font-bold text-gray-600 capitalize">
                  {voteCount}
                </td>
                <td>
                  <Link className="text-blue-400 underline hover:text-blue-700">Comments</Link>
                </td>
                <td>
                  <Link>
                  <button className="btn btn-sm btn-outline block   leading-loose text-xs text-center  font-semibold  rounded-xl">
                      Delete
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyPostsTable;
