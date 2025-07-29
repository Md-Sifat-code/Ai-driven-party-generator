// main.tsx or index.tsx
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import LandingPage from "./Pages/LandingPage";
import AuthLayout from "./Layout/Auth/AuthLayout";
import Login from "./Pages/Authentication/Login";
import Sign from "./Pages/Authentication/Sign";
import MainLayout from "./Layout/MainLayout";
import PartyGenerator from "./Pages/PartyGenerator";
import DiyBoxes from "./Pages/DiyBoxes";
import DiyBoxDetails from "./Pages/DiyBoxDetails";
import PartyInvitations from "./Pages/PartyInvitations";
import Provider from "./Pages/Provider";
import ProviderDetails from "./Pages/ProviderDetails";
import Shop from "./Pages/Shop";
import ShopDetails from "./Pages/ShopDetails";
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/BlogDetails";
import MyAccount from "./Pages/MyAccount";
import PremiumFeature from "./Pages/PremiumFeature";
import LandingLayout from "./Layout/LandingLayout";

// Define your router with type-safe components
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      }
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />
      },
      {
        path: "/auth/signup",
        element: <Sign />
      }
    ]
  },
  {
    path: "/home",
    element: <MainLayout />,
    children: [
      {
        path: "/home",
        element: <LandingPage />
      },
      {
        path: "party-generator",
        element: <PartyGenerator />
      },
      {
        path: "diyboxes",
        element: <DiyBoxes />
      },
      {
        path: "diyboxe/details/:id",
        element: <DiyBoxDetails />
      },
      {
        path: "party-invitations",
        element: <PartyInvitations />
      }
      ,
      {
        path: "provider",
        element: <Provider />
      },
      {
        path: "provider/:id",
        element: <ProviderDetails />
      },
      {
        path: 'shop',
        element: <Shop />
      },
      {
        path: 'shop/:id',
        element: <ShopDetails />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'blog/:id',
        element: <BlogDetails />
      },
      {
        path: 'my-account',
        element: <MyAccount />
      },
      {
        path: 'premium-feature',
        element: <PremiumFeature />
      }
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
