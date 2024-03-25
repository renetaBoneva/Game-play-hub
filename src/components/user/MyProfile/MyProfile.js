import { useEffect, useState } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";

import { getUserById } from "../../../services/authService";
import './MyProfile.css'
import { toast } from "react-toastify";

export function MyProfile() {
    const [userInfo, setUserInfo] = useState({});
    const { _userID } = useAuthContext();

    useEffect(() => {
        getUserById(_userID)
            .then(res => setUserInfo(res))
            .catch(err => toast.error(err))
    }, [_userID]);

    return (
        <>
            <div className="myProfileWrapper">
                {userInfo && (<>
                    <h2>My profile</h2>
                    <div className="myProfileInfoWrapper">
                        {userInfo && userInfo.email && (
                            <div className="infoWrapper">
                                <p className="infoLabel">Email:</p>
                                <p className="infoP">{userInfo.email}</p>
                            </div>)}

                        {userInfo && userInfo.username && (
                            <div className="infoWrapper">
                                <p className="infoLabel">Username:</p>
                                <p className="infoP">{userInfo.username}</p>
                            </div>)}
                    </div> </>)}
            </div>
        </>
    );
}