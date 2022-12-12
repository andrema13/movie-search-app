import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/Root";
import Discover from "./pages/Discover";
import MovieDetails from "./pages/MovieDetails";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Discover />,
      },
      {
        path: "discover",
        index: true,
        element: <Discover />,
      },
      {
        path: "movie/:movieId",
        element: <MovieDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <Discover />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
