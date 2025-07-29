// main.tsx or index.tsx
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import LandinLAyout from "./Layout/LandinLAyout";
import LandingPage from "./Pages/LandingPage";
import AuthLayout from "./Layout/Auth/AuthLayout";
import Login from "./Pages/Authentication/Login";
import Sign from "./Pages/Authentication/Sign";
import MainLayout from "./Layout/MainLayout";
import PartyGenerator from "./Pages/PartyGenerator";
import DiyBoxes from "./Pages/DiyBoxes";

// Define your router with type-safe components
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandinLAyout/>,
    children: [
      {
        path : "/",
        element : <LandingPage/>
      }
    ]
  },
  {
    path : "/auth",
    element : <AuthLayout/>,
    children : [
      {
        path : "/auth/login",
        element : <Login/>
      },
      {
        path : "/auth/signup",
        element : <Sign/>
      }
    ]
  },
  {
    path : "/home",
    element : <MainLayout/>,
    children : [
      {
        path : "/home",
        element : <LandingPage/>
      },
      {
        path : "/party-generator",
        element : <PartyGenerator/>
      },
      {
        path : "/diyboxes",
        element : <DiyBoxes/>
      },
    ]
  }
]);

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
