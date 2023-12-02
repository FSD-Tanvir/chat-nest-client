import { AiOutlineNotification } from "react-icons/ai";
import useAuth from "../../Component/Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { getAllAnnouncements } from "../../api/announcements";
import Loader from "../../Component/Shared/Loader";

const Announcement = () => {
  const { user } = useAuth();

  const { data: announcements, isLoading } = useQuery({
    queryFn: async () => await getAllAnnouncements(),
    queryKey: ["announcements"],
  });

  if (isLoading) return <Loader />;

  return (
    <>
      {user && (
        <div className="container mx-auto my-8 px-2">
          <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 p-6 rounded-md shadow-md text-white">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold flex items-center">
                <AiOutlineNotification className="mr-2 text-yellow-300" />
                Announcements
              </h2>
            </div>
            {/* Display announcements if there are any */}
            <div className="space-y-4">
              {announcements.map((announcement) => (
                <div key={announcement._id}>
                  <h3 className="text-lg font-semibold">
                    {announcement.title}
                  </h3>
                  <p className="text-gray-300">{announcement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Announcement;
