import { useEffect } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { Navigate } from "react-router-dom";

export function Logout() {  
    const { onLogoutHandler } = useAuthContext();

    useEffect(() => {
        onLogoutHandler()
    })

    return <Navigate to={'/'} />
}