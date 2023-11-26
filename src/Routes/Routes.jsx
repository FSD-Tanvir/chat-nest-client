import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layouts/Main";
import ErrorPage from "../Pages/ErrorPage";
import SignUp from "../Pages/SignIn/SignUp";
import SignIn from "../Pages/SignIn/SignIn";

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
    {path:'/sign-in', element: <SignIn/>},
    {path:'/sign-up', element: <SignUp/>}
  ]);
  