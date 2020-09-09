import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Site from "../Pages/Site/Site";

// import PageNotFound from "../pages/404/404";

const Routes = [
  {
    id: 1,
    name: "SignIn",
    path: "/SignIn",
    exact: false,
    display: true,
    Component: SignIn,
  },
  {
    id: 2,
    name: "SignUp",
    path: "/SignUp",
    exact: false,
    display: true,
    Component: SignUp,
  },
  {
    id: 3,
    name: "Chat",
    path: "/",
    exact: true,
    display: true,
    Component: Site,
  },
];

export { Routes };
