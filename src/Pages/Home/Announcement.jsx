import { AiOutlineNotification } from "react-icons/ai";
import { useTransition, animated } from "react-spring";
import useAuth from "../../Component/Hooks/useAuth";

const Announcement = () => {
  const { user } = useAuth();
  // Sample announcements (replace with your actual data)
  const announcements = [
    {
      id: 1,
      title: "Important Update",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "New Feature Added",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  // Check if there are any announcements
  const hasAnnouncements = announcements.length > 0;

  // Define fade-in transition
  const fadeTransition = useTransition(hasAnnouncements, {
    from: { opacity: 0, transform: "translateY(-50px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 300, friction: 10 }, // Adjust these values for the desired animation
  });

  return (
    <>
      {user && (
        <>
          {fadeTransition(
            (style, item) =>
              item && (
                <animated.div style={style} className="container mx-auto my-8">
                  <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 p-6 rounded-md shadow-md text-white">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-bold flex items-center">
                        <AiOutlineNotification className="mr-2 text-yellow-300" />
                        Announcements
                      </h2>
                    </div>
                    {/* Display announcements if there are any */}
                    {announcements.map((announcement) => (
                      <div key={announcement.id} className="mb-4">
                        <h3 className="text-lg font-semibold">
                          {announcement.title}
                        </h3>
                        <p className="text-gray-300">
                          {announcement.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </animated.div>
              )
          )}
        </>
      )}
    </>
  );
};

export default Announcement;
