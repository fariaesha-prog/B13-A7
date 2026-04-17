import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TimelineProvider } from "./context/TimelineContext";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import FriendDetails from "./pages/FriendsDetails";
import Timeline from "./pages/Timeline";
import Stats from "./pages/Stats";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/friend/:id", element: <FriendDetails /> },
      { path: "/timeline", element: <Timeline /> },
      { path: "/stats", element: <Stats /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TimelineProvider>
      <RouterProvider router={router} />
    </TimelineProvider>
  </React.StrictMode>
);
