import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import ArchivePage from "../pages/ArchivePage";
import DraftsPage from "../pages/DraftsPage";
import EmailPage from "../pages/EmailPage";
import ImportantPage from "../pages/ImportantPage";
import InboxPage from "../pages/InboxPage";
import SentPage from "../pages/SentPage";
import SpamPage from "../pages/SpamPage";
import TrashPage from "../pages/TrashPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "archive",
        element: <ArchivePage />,
      },
      {
        path: "drafts",
        element: <DraftsPage />,
      },
      {
        path: "email/:emailId",
        element: <EmailPage />,
      },
      {
        path: "important",
        element: <ImportantPage />,
      },
      {
        path: "inbox",
        element: <InboxPage />,
      },
      {
        path: "sent",
        element: <SentPage />,
      },
      {
        path: "spam",
        element: <SpamPage />,
      },
      {
        path: "trash",
        element: <TrashPage />,
      },
    ],
  },
]);

export default router;
