import { Outlet, Navigate } from "react-router-dom";

export function IsUserOrGuestGuard() {
    console.log('TODO: state management logic');
    console.log('TODO: work on route guard');

    const guestLS = localStorage.getItem('%guest%');
    const userLS = localStorage.getItem('%user%');
    
    if(!guestLS && !userLS) {
        <Navigate to={'/userOrGuest'}/>
    }

    return (
        <div className='contentWrapper mainWrapper'>
            <Outlet />
        </div>
    )
}