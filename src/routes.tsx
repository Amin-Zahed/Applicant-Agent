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
import PrivacyPolicy from "./Pages/privacyPolicy/privacyPolicy";

const routes = [
  {
    path: "/",
    element: (
      <PublicRoute>
        <LandingPage />
      </PublicRoute>
    ),
  },
  {
    path: "/signin",
    element: (
      <PublicRoute>
        <Signin />
      </PublicRoute>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <PublicRoute>
        <ForgotPassword />
      </PublicRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <PublicRoute>
        <Signup />
      </PublicRoute>
    ),
  },
  {
    path: "/terms&conditions",
    element: (
      <PublicRoute>
        <TermsAndConditions />
      </PublicRoute>
    ),
  },
  {
    path: "/privacy-policy",
    element: (
      <PublicRoute>
        <PrivacyPolicy />
      </PublicRoute>
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
      { path: "bio", element: <Bio /> },
      { path: "analysis", element: <Analysis /> },
    ],
  },
  { path: "/*", element: <NotFound /> },
];

export default routes;
