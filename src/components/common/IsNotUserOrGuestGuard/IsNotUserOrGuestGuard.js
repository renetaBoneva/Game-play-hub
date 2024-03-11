import { Outlet, Navigate } from "react-router-dom";

export function IsNotUserOrGuestGuard() {
    const guestLS = localStorage.getItem('%guest%');
    const userLS = localStorage.getItem('%user%');
    
    if(!guestLS && !userLS) {
        return <Navigate to={'/userOrGuest'}/>
    }

    return (
        <div className='contentWrapper mainWrapper'>
            <Outlet />
        </div>
    )
}