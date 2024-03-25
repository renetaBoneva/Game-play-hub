import { useEffect, useState } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { toast } from "react-toastify";

import { getUserById } from "../../../services/authService";
import './MyProfile.css'
import { Loading } from "../../common/Loading/Loading";

export function MyProfile() {
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { _userID } = useAuthContext();

    useEffect(() => {
        getUserById(_userID)
            .then(res => {
                setUserInfo(res)
                setIsLoading(false);
            })
            .catch(err => {
                toast.error(err);
                setIsLoading(false);
            });
    });

    return (
        <>
            {isLoading
                ? <Loading />
                : <div className="myProfileWrapper">
                    {Object.keys(userInfo).length > 0 && (<>
                        <h2>My profile</h2>
                        <div className="myProfileInfoWrapper">
                            {Object.keys(userInfo).length > 0 && userInfo.email && (
                                <div className="infoWrapper">
                                    <p className="infoLabel">Email:</p>
                                    <p className="infoP">{userInfo.email}</p>
                                </div>)}

                            {Object.keys(userInfo).length > 0 && userInfo.username && (
                                <div className="infoWrapper">
                                    <p className="infoLabel">Username:</p>
                                    <p className="infoP">{userInfo.username}</p>
                                </div>)}
                        </div> </>)}
                </div>}
        </>
    );
}