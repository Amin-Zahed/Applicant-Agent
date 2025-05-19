import LandingPage from "./Pages/landingPage/LandingPage";
import NotFound from "./Pages/notFound/NotFound";
import Notifications from "./Pages/notifications/Notifications";
import Add from "./Pages/add/Add";
import Info from "./Pages/dashboard/subPages/info/Info";
import Chart from "./Pages/dashboard/subPages/chart/Chart";
import Signin from "./Pages/signin/Signin";
import Signup from "./Pages/signup/Signup";
import ForgotPassword from "./Pages/forgotPassword/ForgotPassword";
import PrivateRoute from "./components/private-route";
import PersonalRoute from "./components/personal-route";
import Dashboard from "./Pages/dashboard/dashboard";

const routes = [
  {
    path: "/",
    element: (
      <PersonalRoute>
        <LandingPage />
      </PersonalRoute>
    ),
  },
  {
    path: "/signin",
    element: (
      <PersonalRoute>
        <Signin />
      </PersonalRoute>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <PersonalRoute>
        <ForgotPassword />
      </PersonalRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <PersonalRoute>
        <Signup />
      </PersonalRoute>
    ),
  },
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
        <Add />
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
