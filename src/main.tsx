import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StudentList } from "./components/student-list.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/student-list", element: <StudentList /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
