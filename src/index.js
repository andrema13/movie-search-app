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
        path: "discover",
        element: <Discover />,
      },
      {
        path: "movie/:movieId",
        element: <MovieDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
