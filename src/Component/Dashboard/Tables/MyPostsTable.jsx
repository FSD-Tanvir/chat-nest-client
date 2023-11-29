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
          {MyPosts.map((MyPost) => {
            return (
              <tr key={MyPost._id}>
                <td>
                  <div className="flex items-center space-x-3 ">
                    <div>
                      <div className="font-bold">{MyPost.postTitle}</div>
                    </div>
                  </div>
                </td>
                <td className="font-bold text-gray-600 capitalize">
                  {/* Number of votes */}
                </td>
                <td>{/* comment button */}</td>
                <td>
                  <Link>
                    <button className="btn block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl">
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
