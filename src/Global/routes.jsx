import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

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
    id: 1,
    name: "SignUp",
    path: "/SignUp",
    exact: false,
    display: true,
    Component: SignUp,
  },
];

export { Routes };
