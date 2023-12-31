/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Banner = ({ handleSearch }) => {
  const handleTagInput = (e) => {
    const searchTag = e.target.value.toLowerCase().replace(/\s/g, "");
    handleSearch(searchTag);
  };

  return (
    <div className="min-h-[calc(100vh-224px)] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-12 text-white flex items-center justify-center">
      <div className="container mx-auto flex flex-col items-center px-1">
        <h1 className="text-4xl font-bold mb-4 text-center lg:text-5xl lg:mb-8">
          Explore Conversations
        </h1>
        <p className="text-lg mb-8 text-center lg:text-xl lg:max-w-2xl">
          Join discussions on various topics and connect with the community.
        </p>
        <form onChange={handleTagInput} className=" w-full max-w-md mx-auto">
          <input
            name="searchTag"
            type="text"
            placeholder="Search by tags..."
            className="w-full h-12 px-4 text-gray-800 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
          />
        </form>
        <p className="mt-4 text-center lg:text-lg">
          Not sure where to start? Check out our{" "}
          <Link to="/popular" className="underline">
            popular
          </Link>{" "}
          posts.
        </p>
      </div>
    </div>
  );
};

export default Banner;
