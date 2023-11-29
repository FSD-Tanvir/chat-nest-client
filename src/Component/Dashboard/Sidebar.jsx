import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FaHome } from "react-icons/fa";
import AdminMenu from "./Menu/AdminMenu";
import UserMenu from "./Menu/UserMenu";
import useRole from "../Hooks/useRole";

const Sidebar = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const [isActive, setActive] = useState(true);
  const [role] = useRole();

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
              {/* Role based Menu Items */}

              {role ? (
                <>
                  {role === "bronze" && <UserMenu />}
                  {role === "gold" && <UserMenu />}
                  {role === "admin" && <AdminMenu />}
                </>
              ) : null}
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
