import Dashboard from "./Pages/dashboard/Dashboard";
import NotFound from "./Pages/notFound/NotFound";
import Profile from "./Pages/profile/Profile";
import Notifications from "./Pages/notifications/Notifications";
import Add from "./Pages/add/Add";
import Info from "./Pages/profile/subPages/info/Info";
import Chart from "./Pages/profile/subPages/chart/Chart";
import Signin from "./Pages/signin/Signin";
import Signup from "./Pages/signup/Signup";
import ForgotPassword from "./Pages/forgotPassword/ForgotPassword";
import PrivateRoute from "./components/private-route";

const routes = [
  { path: "/", element: <Dashboard /> },
  { path: "/signin/", element: <Signin /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/signup", element: <Signup /> },
  {
    path: "/notifications",
    element: (
      <PrivateRoute>
        <Notifications />
      </PrivateRoute>
    ),
  },
  {
    path: "/add",
    element: (
      <PrivateRoute>
        <Add />{" "}
      </PrivateRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
    children: [
      { path: "info", element: <Info /> },
      { path: "chart", element: <Chart /> },
    ],
  },
  { path: "/*", element: <NotFound /> },
];

export default routes;
