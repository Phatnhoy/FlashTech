import { Outlet } from "react-router-dom";
import UserChatComponent from "./UserChatComponent";

const RouteWithUserComponent = () => {
    return <>
        <Outlet /><UserChatComponent />
    </>
}

export default RouteWithUserComponent;