import MyPostsTable from "../../../Component/Dashboard/Tables/MyPostsTable";
import Loader from "../../../Component/Shared/Loader";
import useAuth from "../../../Component/Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const MyPosts = () => {
  const { user } = useAuth();
  const userEmail = user.email;
  const { data, isLoading } = useQuery({
    queryKey: [userEmail],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/my-posts/?userEmail=${userEmail}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="py-10 w-full m-auto bg-white rounded-md shadow-md min-h-screen">
      <h1 className="text-3xl font-semibold text-center text-rose-600 mb-3">
        Here is Your All Posts
      </h1>
      <MyPostsTable data={data} />
    </div>
  );
};

export default MyPosts;
