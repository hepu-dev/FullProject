import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainApp from "./components/MainMenu/MainApp.jsx";
import VideoDetail from "./components/VideoDetail/VideoDetail.jsx";

const router = createBrowserRouter([
{
    path: "/",
    element: <MainApp />,
},
{
    path: "detail/:videoId",
    element: <VideoDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );