import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layouts/Main";
import ErrorPage from "../Pages/ErrorPage";
import SignUp from "../Pages/SignIn/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import Dashboard from "../Layouts/Dashboard";
import MyProfile from "../Pages/Dashboard/Users/MyProfile";
import AddPost from "../Pages/Dashboard/Users/AddPost";
import MyPosts from "../Pages/Dashboard/Users/MyPosts";
import AdminProfile from "../Pages/Dashboard/Admin/AdminProfile";
import MakeAnnouncement from "../Pages/Dashboard/Admin/MakeAnnouncement";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import ReportedActivities from "../Pages/Dashboard/Admin/ReportedActivities";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  { path: "/sign-in", element: <SignIn /> },
  { path: "/sign-up", element: <SignUp /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-profile",
        element: <MyProfile />,
      },
      {
        path: "add-post",
        element: <AddPost />,
      },
      {
        path: "my-posts",
        element: <MyPosts />,
      },
      {
        path: "admin-profile",
        element: <AdminProfile />,
      },
      {
        path: "make-announcement",
        element: <MakeAnnouncement />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "reported-activities",
        element: <ReportedActivities />,
      },
    ],
  },
]);
