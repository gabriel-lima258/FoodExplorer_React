import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { AdminRoutes } from "./admin.routes";

export function Routes(){
    return(
        <BrowserRouter>
            <AdminRoutes/>
        </BrowserRouter>
    )
}