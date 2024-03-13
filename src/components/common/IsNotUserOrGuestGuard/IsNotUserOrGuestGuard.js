import { Outlet, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { useAuthContext } from "../../../hooks/useAuthContext";

export function IsNotUserOrGuestGuard() {
    const { user, guest } = useAuthContext();
    const [isUserOrGuest, setIsUserOrGuest] = useState(false);

    useEffect(() => {
        if (!guest && !user) {
            setIsUserOrGuest(false);
        } else {
            setIsUserOrGuest(true);
        }
    }, [user, guest])

    if (isUserOrGuest) {
        return (
            <div className='contentWrapper mainWrapper'>
                <Outlet />
            </div>
        )
    } else {
        return <Navigate to={'/userOrGuest'} />
    }
}
