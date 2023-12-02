import toast from "react-hot-toast";
import useAuth from "../../../Component/Hooks/useAuth";
import useRole from "../../../Component/Hooks/useRole";
import { addTag } from "../../../api/tags";

const AdminProfile = () => {
  const { user } = useAuth();
  const [role] = useRole();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const label = form.tag.value;
    const value = label.toLowerCase().replace(/\s/g, "");
    const tag = {
      value,
      label,
    };

    try {
      const data = await addTag(tag);
      console.log(data);
      toast.success("Tag Added");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="">
      {/* profile section */}
      <div className="flex flex-col justify-center items-center min-h-screen px-5">
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
      <div className="flex flex-col justify-center items-center px-5">
        {/* add tag form */}
        <div className="md:w-4/5 lg:w-3/5 xl:w-2/5 py-5">
          <div className="max-w-lg mx-auto mt-8 p-8 bg-red-500 rounded-md shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-white">Add tag</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Title */}
              <div>
                <label
                  htmlFor="tag"
                  className="block text-sm font-medium text-white"
                >
                  Tag:
                </label>
                <input
                  type="text"
                  name="tag"
                  id="tag"
                  placeholder="Enter Tag"
                  className="mt-1 p-2 w-full border border-white rounded-md focus:outline-none focus:border-blue-300 bg-inherit text-white"
                />
              </div>

              <button
                type="submit"
                className="bg-white text-error px-4 py-2 rounded-md "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
