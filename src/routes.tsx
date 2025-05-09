import LandingPage from "./Pages/landingPage/LandingPage";
import NotFound from "./Pages/notFound/NotFound";
import Notifications from "./Pages/notifications/Notifications";
import Add from "./Pages/add/Add";
import Info from "./Pages/profile/subPages/info/Info";
import Chart from "./Pages/profile/subPages/chart/Chart";
import Signin from "./Pages/signin/Signin";
import Signup from "./Pages/signup/Signup";
import ForgotPassword from "./Pages/forgotPassword/ForgotPassword";
import PrivateRoute from "./components/private-route";
import Dashboard from "./Pages/profile/Profile";

const routes = [
  { path: "/", element: <LandingPage /> },
  { path: "/signin", element: <Signin /> },
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
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
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
