import { createBrowserRouter } from "react-router-dom";
import App from "@/App";

import ErrorComponent from "@/components/ErrorComponent";
import EmailsListPage from "@/pages/EmailsListPage";
import EmailPage from "@/pages/EmailPage";

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
