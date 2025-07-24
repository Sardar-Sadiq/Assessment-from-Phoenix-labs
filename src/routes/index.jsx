import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Progress from "../pages/Progress";
import Shipments from "../pages/Shipments";
import Layout from "../components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <Layout />, // parent layout
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/progress", element: <Progress /> },
      { path: "/shipments", element: <Shipments /> },
    ],
  },
]);
