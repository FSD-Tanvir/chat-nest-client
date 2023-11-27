import { useState } from "react";
import MenuItem from "./MenuItem";
// import ToggleBtn from "../../Button/ToggleBtn";
import { GrLogout } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FaHome, FaPen } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GiPostOffice } from "react-icons/gi";
import { TfiAnnouncement } from "react-icons/tfi";
import { MdManageAccounts } from "react-icons/md";
import { MdReportProblem } from "react-icons/md";
// import { BsFillHouseAddFill } from "react-icons/bs";
// import { MdHomeWork } from "react-icons/md";
// import useRole from "../../../hooks/useRole";
// import GuestMenu from "./Menu/GuestMenu";
// import HostMenu from "./Menu/HostMenu";
// import AdminMenu from "./Menu/AdminMenu";

const Sidebar = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const [isActive, setActive] = useState(true);
  //   const [role] = useRole();

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleLogout = () => {
    logOut();
    navigate("/");
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white flex justify-between md:hidden ">
        <div>
          <Link to="/" className=" text-3xl font-bold flex items-center my-3">
            <span className="mr-2">
              <FaHome />
            </span>{" "}
            Chat Nest
          </Link>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button  p-4 focus:outline-none focus:bg-red-500"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-500 mx-auto">
              <Link
                to="/"
                className="text-white text-3xl font-bold flex items-center"
              >
                <span className="mr-2">
                  <FaHome />
                </span>{" "}
                Chat Nest
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* If a user is host */}

            <nav>
              <MenuItem
                icon={CgProfile}
                label="My Profile"
                address="/dashboard/my-profile"
              />
              <MenuItem
                icon={FaPen}
                label="Add Post"
                address="/dashboard/add-post"
              />
              <MenuItem
                icon={GiPostOffice}
                label="My Posts"
                address="/dashboard/my-posts"
              />
              <MenuItem
                icon={CgProfile}
                label="Admin Profile"
                address="/dashboard/admin-profile"
              />
              <MenuItem
                icon={TfiAnnouncement}
                label="Make Announcement"
                address="/dashboard/make-announcement"
              />
              <MenuItem
                icon={MdManageAccounts}
                label="Manage Users"
                address="/dashboard/manage-users"
              />
              <MenuItem
                icon={MdReportProblem}
                label="Reported Activities"
                address="/dashboard/reported-activities"
              />

              {/* Role based Menu Items */}

              {/* {role ? (
                <>
                  {role === "guest" && <GuestMenu />}
                  {role === "host" ? (
                    toggle ? (
                      <HostMenu />
                    ) : (
                      <GuestMenu />
                    )
                  ) : null}
                  {role === "admin" && <AdminMenu />}
                </>
              ) : null} */}
            </nav>
          </div>
        </div>

        <div>
          <hr />
          <button
            onClick={handleLogout}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
