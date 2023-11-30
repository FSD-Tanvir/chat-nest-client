import ManageUsersTable from "../../../Component/Dashboard/Tables/ManageUsersTable";
import Loader from "../../../Component/Shared/Loader";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../../api/users";

const ManageUsers = () => {
  const { data, isLoading } = useQuery({
    queryFn: async () => await getAllUsers(),
    queryKey: ["users"],
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-full m-auto bg-white rounded-md shadow-md min-h-screen">
      <h1 className="text-3xl font-semibold text-center text-rose-600 mb-3">
        Here is Your All Posts
      </h1>
      <ManageUsersTable data={data} />
    </div>
  );
};

export default ManageUsers;
