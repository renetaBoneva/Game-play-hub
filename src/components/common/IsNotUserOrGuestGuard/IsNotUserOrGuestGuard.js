import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useAuthContext } from "../../../hooks/useAuthContext";

export function IsNotUserOrGuestGuard() {
    const { isUserOrGuest } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isUserOrGuest) {
            navigate('/userOrGuest')
        }
    }, [isUserOrGuest, navigate])

    return (
        <div className='contentWrapper mainWrapper'>
            <Outlet />
        </div>
    )
}
