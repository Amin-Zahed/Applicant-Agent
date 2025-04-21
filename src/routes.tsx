import List from "./Pages/list/List";
import Dashboard from "./Pages/dashboard/Dashboard";
import Log from "./Pages/log/Log";
import NotFound from "./Pages/notFound/NotFound";
import Profile from "./Pages/profile/Profile";
import Notifications from "./Pages/notifications/Notifications";
import Add from "./Pages/add/Add";
import Info from "./Pages/profile/subPages/info/Info";
import Chart from "./Pages/profile/subPages/chart/Chart";
import Signin from "./Pages/signin/Signin";
import Signup from "./Pages/signup/Signup";
import ForgotPassword from "./Pages/forgotPassword/ForgotPassword";

const routes = [
  { path: "/", element: <Dashboard /> },
  {
    path: "/signin/",
    element: <Signin />,
  },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/signup", element: <Signup /> },
  { path: "/list", element: <List /> },
  { path: "/log", element: <Log /> },
  { path: "/notifications", element: <Notifications /> },
  { path: "/add", element: <Add /> },
  {
    path: "/profile",
    element: <Profile />,
    children: [
      { path: "info", element: <Info /> },
      { path: "chart", element: <Chart /> },
    ],
  },
  { path: "/*", element: <NotFound /> },
];

export default routes;
