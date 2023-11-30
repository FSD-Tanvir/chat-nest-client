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
import MemberShip from "../Pages/Membership/MemberShip";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";
import PostDetails from "../Pages/PostDetails/PostDetails";
import DashboardPage from "../Pages/Dashboard/DashboardPage";

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
      {
        path: "/post/:id",
        element: (
          <PrivateRoute>
            <PostDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/post/${params.id}`),
      },
      {
        path: "/membership",
        element: (
          <PrivateRoute>
            <MemberShip />
          </PrivateRoute>
        ),
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
        path: "",
        element: <DashboardPage />,
      },
      {
        path: "my-profile",
        element: (
          <UserRoute>
            <MyProfile />
          </UserRoute>
        ),
      },
      {
        path: "add-post",
        element: (
          <UserRoute>
            <AddPost />
          </UserRoute>
        ),
      },
      {
        path: "my-posts",
        element: (
          <UserRoute>
            <MyPosts />
          </UserRoute>
        ),
      },
      {
        path: "admin-profile",
        element: (
          <AdminRoute>
            <AdminProfile />
          </AdminRoute>
        ),
      },
      {
        path: "make-announcement",
        element: (
          <AdminRoute>
            <MakeAnnouncement />
          </AdminRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "reported-activities",
        element: (
          <AdminRoute>
            <ReportedActivities />
          </AdminRoute>
        ),
      },
    ],
  },
]);
