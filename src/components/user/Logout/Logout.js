import { useEffect } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { Loading } from "../../common/Loading/Loading";

export function Logout() {  
    const { onLogoutHandler } = useAuthContext();

    useEffect(() => {
       onLogoutHandler()
    }, [])

    return <Loading />
}