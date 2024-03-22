import { useEffect, useState } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";

import { getUserById } from "../../../services/authService";
import './MyProfile.css'

export function MyProfile() {
    const [userInfo, setUserInfo] = useState({});
    const { user } = useAuthContext();
    const _userID = user._userID;

    useEffect(() => {
        console.log('here');
        getUserById(_userID).then(res => console.log(res)).catch(err => console.log(err));
    });

    return (
        <>
            <div className="myProfileWrapper">
                <h2>My profile</h2>
                <div className="myProfileInfoWrapper">
                    {user && user.email && (
                        <div className="infoWrapper">
                            <p className="infoLabel">Email:</p>
                            <p className="infoP">{user.email}</p>
                        </div>)}

                    {user && user.username && (
                        <div className="infoWrapper">
                            <p className="infoLabel">Username:</p>
                            <p className="infoP">{user.username}</p>
                        </div>)}
                </div>
            </div>
        </>
    );
}