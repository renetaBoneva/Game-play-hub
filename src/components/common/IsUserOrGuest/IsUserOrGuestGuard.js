import { Outlet, Navigate } from "react-router-dom";

export function IsUserOrGuestGuard() {
    console.log('TODO: state management logic');
    console.log('TODO: work on route guard');

    const guestLS = localStorage.getItem('%guest%');
    const userLS = localStorage.getItem('%user%');

    console.log(!guestLS && !userLS);
    
    if(!guestLS && !userLS) {
        return <Navigate to={'/userOrGuest'}/>
    }

    return (
        <div className='contentWrapper mainWrapper'>
            <Outlet />
        </div>
    )
}