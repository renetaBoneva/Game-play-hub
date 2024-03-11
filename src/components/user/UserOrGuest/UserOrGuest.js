import styles from "./UserOrGuest.module.css"
import { Login } from "../Login/Login";
import { GuestRegistrationForm } from "./GuestRegistrationForm/GuestRegisterForm.js";

export function UserOrGuest() {
    return (
        <div className='contentWrapper mainWrapper'>
            <h2 className={styles.h2}>Continue as gamer</h2>
            <Login />
            <hr className={styles.hr}></hr>
            <h2 className={styles.h2}>Continue as guest</h2>
            <GuestRegistrationForm />
        </div>
    )
}