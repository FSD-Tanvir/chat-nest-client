import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-5xl font-bold mb-4 text-center">Oops! Something went wrong.</h1>
      <p className="text-lg mb-8 text-center">
        We couldn't find the page you're looking for.
      </p>
      <div className="flex">
        <Link
          to="#"
          className="bg-white text-gray-800 px-4 py-2 rounded-full transition duration-300 hover:bg-gray-200"
          onClick={() => navigate(-1)}
        >
          Go Back
        </Link>
        <Link
          to="/"
          className="bg-white text-gray-800 px-4 py-2 rounded-full ml-4 transition duration-300 hover:bg-gray-200"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
