import { createBrowserRouter } from "react-router-dom"; 
import App from "../App";
import AdminPage from "../page/admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminPage />,
  },
]);

export default router;
