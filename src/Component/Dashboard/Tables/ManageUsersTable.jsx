/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
const MangeUsersTable = ({ data }) => {
  const users = data;
  return (
    <div className="overflow-x-auto pt-5">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>MemberShip</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* rows*/}
          {users.map((user) => {
            return (
              <tr key={user._id}>
                <td>
                  <div className="flex items-center space-x-3 ">
                    <div>
                      <div className="font-bold">{user.username}</div>
                    </div>
                  </div>
                </td>
                <td className="font-bold text-gray-600 capitalize">
                  {user.email}
                </td>
                <td>{user.badge}</td>
                <td>
                  <Link>
                    <button className="w-[100px] btn btn-sm btn-outline block leading-loose text-xs text-center  font-semibold  rounded-xl">
                      Make Admin
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

export default MangeUsersTable;
