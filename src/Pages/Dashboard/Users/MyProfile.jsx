import useAuth from "../../../Component/Hooks/useAuth";
import useRole from "../../../Component/Hooks/useRole";

const MyProfile = () => {
  const { user } = useAuth();
  const [role] = useRole();
  console.log(user);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/5 xl:w-2/5">
        <img
          alt="profile"
          src="https://wallpapercave.com/wp/wp10784415.jpg"
          className="w-full mb-4 rounded-t-lg h-36 object-cover"
        />
        <div className="flex flex-col items-center justify-center  -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user.photoURL}
              className="mx-auto object-cover rounded-full h-24 w-24 border-2 border-white"
            />
          </a>

          <p className="p-2 px-4 text-xs text-white bg-pink-500 rounded-full">
            {role && role.toUpperCase()}
          </p>
          <p className="mt-2 text-xl font-medium text-gray-800">
            User Id: {user.uid}
          </p>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-center text-sm text-gray-600">
              <div className="flex  justify-between w-full">
                <p className="flex flex-col mb-2 md:mb-0">
                  Name
                  <span className="font-bold text-black">
                    {user.displayName}
                  </span>
                </p>
                <p className="flex flex-col mb-2 md:mb-0">
                  Email
                  <span className="font-bold text-black">{user.email}</span>
                </p>
              </div>

              <div className="flex flex-col  md:flex-row md:w-full justify-between my-5">
                <button className="bg-[#F43F5E] px-6 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] mb-2 md:mb-0 md:mr-2">
                  Update Profile
                </button>
                <button className="bg-[#F43F5E] px-4 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]">
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
