import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Doctors from "../pages/dashboard/Doctors";
import AllUsers from "../pages/dashboard/AllUsers";
import Services from "../pages/dashboard/Services";
import AnalysisReport from "../pages/dashboard/AnalysisReport";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <AnalysisReport />,
      },
      {
        path: "doctors",
        element: <Doctors />,
      },
      {
        path: "all-users",
        element: <AllUsers />,
      },
      {
        path: "services",
        element: <Services />,
      },
    ],
  },
]);
