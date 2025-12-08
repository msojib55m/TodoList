import { createBrowserRouter } from "react-router";
import TodoPage from "../pages/todo";
import Layouts from "../layouts";
import Admin from "../pages/admin";
export default createBrowserRouter([
    {
        Component: Layouts,
        children:[
            {
                path:"/",
                Component:TodoPage,
            },
            {
                path:"/admin",
                Component: Admin,
            }
        ]
        
    }
]);