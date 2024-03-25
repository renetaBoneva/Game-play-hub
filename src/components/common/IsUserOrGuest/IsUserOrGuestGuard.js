import { Navigate } from "react-router-dom";
import { UserOrGuest } from "../../user/UserOrGuest/UserOrGuest";
import { useSelector } from "react-redux";

export function IsUserOrGuestGuard() {
    const userState = useSelector(state => state.user);
     
    if(userState.username) {
        return <Navigate to={'/'}/>
    }

    return  <UserOrGuest />
}