import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "@/App";

const ErrorComponent = lazy(() => import("@/components/utilsComponents/ErrorComponent"));
const EmailsListPage = lazy(() => import("@/pages/EmailsListPage"));
const EmailPage = lazy(() => import("@/pages/EmailPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: ":folder",
        element: <EmailsListPage />,
      },
      {
        path: "email",
        element: <EmailPage />,
      },
    ],
  },
]);

export default router;
