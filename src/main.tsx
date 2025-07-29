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
