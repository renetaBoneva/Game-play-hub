import styles from "./UserOrGuest.module.css"
import { Login } from "../Login/Login";
import { GuestRegistrationForm } from "./GuestRegistrationForm/GuestRegisterForm.js";
import { useEffect } from "react";

export function UserOrGuest() {
    useEffect(() => {
        document.querySelector('.mainWrapper').style.height = 'auto'
        return () => {
            document.querySelector('.mainWrapper').style.height = '70vh'
        }
    }, [])

    return (
        <>
            <h2 className={styles.h2}>Continue as guest</h2>
            <GuestRegistrationForm />
            <hr className={styles.hr}></hr>
            <h2 className={styles.h2}>Continue as authenticated user</h2>
            <Login />
        </>
    )
}