import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import NewClient, { action as newClientAction } from "./pages/NewClient";
import Home, { loader as clientsLoader } from "./pages/Home";
import ErrorPage from "./components/ErrorPage";
import EditClient, {
  loader as editClientLoader,
  action as editClientAction,
} from "./pages/EditClient";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: clientsLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/about-us",
        element: <h1>About us</h1>,
      },
      {
        path: "/clients/new",
        element: <NewClient />,
        action: newClientAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clients/:clientId/edit",
        element: <EditClient />,
        loader: editClientLoader,
        action: editClientAction,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

