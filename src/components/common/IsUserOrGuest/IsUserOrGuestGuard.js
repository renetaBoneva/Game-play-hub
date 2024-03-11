import { Navigate } from "react-router-dom";
import { UserOrGuest } from "../../user/UserOrGuest/UserOrGuest";

export function IsUserOrGuestGuard() {
    const guestLS = localStorage.getItem('%guest%');
    const userLS = localStorage.getItem('%user%');
    
    if(guestLS || userLS) {
        return <Navigate to={'/'}/>
    }

    return  <UserOrGuest />
}