import { FaUser, FaSignOutAlt } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";

const ProfileDropdown = ({ onLogout }) => {
  const { user, logOut } = useAuth();

  return (
    <div className="absolute rounded-xl shadow-md bg-white right-0 top-12 text-sm w-fit">
      <div className="flex flex-col ">
        <div className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-default">
          {user?.displayName}
        </div>
        <Link
          to="/dashboard"
          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold "
        >
          Dashboard
        </Link>

        <div
          onClick={logOut}
          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
        >
          Logout
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
