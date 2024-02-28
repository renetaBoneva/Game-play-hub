import { useEffect } from "react"

import { useForm } from "../../../hooks/useForm";
import { useAuthContext } from "../../../hooks/useAuthContext";

export function Register() {
    const { onRegisterHandler } = useAuthContext();
    const { values, changeValues, onSubmit, validationMsg, handleIsValid, isDisabled } = useForm({
        email: "",
        username: "",
        password: "",
        rePass: "",
    }, onRegisterHandler)

    useEffect(() => {
        document.querySelector('div.contentWrapper').style.height = '70vh'
        return () => {
            document.querySelector('div.contentWrapper').style.height = '100vh'
        }
    }, [])

    return (
        <form method="POST" id="registerForm" onSubmit={onSubmit}>
            <div className="inputWrapper">
                <label htmlFor="email" >Email</label>
                <input
                    name='email'
                    type="email"
                    value={values.email}
                    onChange={changeValues}
                    onBlur={handleIsValid}
                />
                {validationMsg.email && <p className="validationP">{validationMsg.email}</p> }
            </div>
            <div className="inputWrapper">
                <label htmlFor="username" >Username</label>
                <input
                    name='username'
                    type="text"
                    value={values.username}
                    onChange={changeValues}
                    onBlur={handleIsValid}

                />
            </div>
            <div className="inputWrapper">
                <label htmlFor="password" >Password</label>
                <input
                    name="password"
                    type="password"
                    suggested="current-password"
                    value={values.password}
                    onChange={changeValues}
                    onBlur={handleIsValid}

                />
            </div>
            <div className="inputWrapper">
                <label htmlFor="rePass" >Repeat password</label>
                <input
                    name="rePass"
                    type="password"
                    suggested="current-password"
                    value={values.rePass}
                    onChange={changeValues}
                    onBlur={handleIsValid}

                />
            </div>
            <input type="submit" value='Register' disabled={isDisabled} />
        </form>
    )
}