import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/homePage";

export const routers = createBrowserRouter([
    {
        path:"/",
        element:<HomePage/>
    }
])