import { useHistory } from 'react-router-dom';

const ErrorPage = () => {
  const history = useHistory();

  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-5xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg mb-8">We couldn't find the page you're looking for.</p>
      <button
        className="bg-white text-gray-800 px-4 py-2 rounded-full transition duration-300 hover:bg-gray-200"
        onClick={() => history.goBack()}
      >
        Go Back
      </button>
      <button
        className="bg-white text-gray-800 px-4 py-2 rounded-full ml-4 transition duration-300 hover:bg-gray-200"
        onClick={() => history.push('/')}
      >
        Go Home
      </button>
    </div>
  );
};

export default ErrorPage;

