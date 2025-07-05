import LandingPage from "./Pages/landingPage/LandingPage";
import NotFound from "./Pages/notFound/NotFound";
import Notifications from "./Pages/notifications/Notifications";
import Add from "./Pages/add/Add";
import Bio from "./Pages/dashboard/subPages/bio/Bio";
import Analysis from "./Pages/dashboard/subPages/analysis/Analysis";
import Signin from "./Pages/signin/Signin";
import Signup from "./Pages/signup/Signup";
import ForgotPassword from "./Pages/forgotPassword/ForgotPassword";
import PrivateRoute from "./components/private-route";
import PublicRoute from "./components/public-route";
import Dashboard from "./Pages/dashboard/dashboard";
import TermsAndConditions from "./Pages/terms&conditions/terms&conditions";
import ScheduleDemo from "./Pages/scheduleDemo/ScheduleDemo";

const routes = [
  {
    path: "/Applicant-Agent",
    element: (
      <PublicRoute>
        <LandingPage />
      </PublicRoute>
    ),
  },
  {
    path: "/Applicant-Agent/signin",
    element: (
      <PublicRoute>
        <Signin />
      </PublicRoute>
    ),
  },
  {
    path: "/Applicant-Agent/forgot-password",
    element: (
      <PublicRoute>
        <ForgotPassword />
      </PublicRoute>
    ),
  },
  {
    path: "/Applicant-Agent/signup",
    element: (
      <PublicRoute>
        <Signup />
      </PublicRoute>
    ),
  },
  {
    path: "/Applicant-Agent/terms&conditions",
    element: (
      <PublicRoute>
        <TermsAndConditions />
      </PublicRoute>
    ),
  },
  {
    path: "/Applicant-Agent/schedule-demo",
    element: (
      <PublicRoute>
        <ScheduleDemo />
      </PublicRoute>
    ),
  },
  {
    path: "/Applicant-Agent/notifications",
    element: (
      <PrivateRoute>
        <Notifications />
      </PrivateRoute>
    ),
  },
  {
    path: "/Applicant-Agent/add",
    element: (
      <PrivateRoute>
        <Add />
      </PrivateRoute>
    ),
  },
  {
    path: "/Applicant-Agent/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      { path: "bio", element: <Bio /> },
      { path: "analysis", element: <Analysis /> },
    ],
  },
  { path: "/Applicant-Agent/*", element: <NotFound /> },
];

export default routes;
