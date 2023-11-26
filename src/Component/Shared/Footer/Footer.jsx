
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold mb-2">Connect with us on social media:</p>
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="text-xl hover:text-gray-300 transition-colors duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-xl hover:text-gray-300 transition-colors duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-xl hover:text-gray-300 transition-colors duration-300"
          >
            <FaInstagram />
          </a>
        </div>
        <p className="text-sm mt-4">
          Chat Nest &copy; 2023. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
