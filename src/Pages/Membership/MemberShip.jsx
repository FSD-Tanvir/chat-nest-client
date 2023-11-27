import { FaTrophy } from "react-icons/fa";
import { useSpring, animated } from "react-spring";

const Membership = () => {
  // Animation
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.div
      style={props}
      className="text-center min-h-[calc(100vh-244px)] flex items-center justify-center py-4 px-1"
    >
      <div>
        <h2 className="text-4xl font-bold mb-4 text-gold-500">
          Unlock the Gold Badge
        </h2>
        <p className="text-gray-600 mb-6">
          Become a premium member and enjoy the exclusive Gold Badge status.
        </p>

        {/* Membership Tier */}
        <div className="bg-gradient-to-r from-yellow-100 to-yellow-300 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-yellow-600 flex items-center justify-center">
            <FaTrophy className="mr-2" /> Gold Membership
          </h3>
          <p className="text-gray-600 mb-4">
            Get the prestigious Gold Badge beside your name
          </p>
          <p className="text-3xl font-bold text-yellow-600">$9.99/month</p>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-white px-6 py-3 rounded-md mt-4 inline-block transition-all duration-300">
            Upgrade Now
          </button>
        </div>
      </div>
    </animated.div>
  );
};

export default Membership;
