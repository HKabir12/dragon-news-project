import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
//import { createBrowserRouter, RouterProvider } from "react-router";
import Header from "./components/Header.jsx";
import router from "./routes/routes.jsx";
import { RouterProvider } from "react-router";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
