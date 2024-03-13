import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useAuthContext } from "../../../hooks/useAuthContext";

export function IsNotUserOrGuestGuard() {
    const { user, guest } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!guest && !user) {
            navigate('/userOrGuest')
        }
    }, [user, guest])

    return (
        <div className='contentWrapper mainWrapper'>
            <Outlet />
        </div>
    )
}
