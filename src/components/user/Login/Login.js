import './Login.css'
import { useForm } from "../../../hooks/useForm";
import { useAuthContext } from "../../../hooks/useAuthContext";

export function Login() {
    const { onLoginHandler } = useAuthContext();
    const { values, changeValues, onSubmit, validationMsg, handleIsValid, isDisabled } = useForm({
        email: "",
        password: ""
    }, onLoginHandler)

    function handleChange(e) {
        changeValues(e);
        handleIsValid(e);
    }

    return (
        <>
            <form method="POST" id="loginForm" onSubmit={onSubmit}>
                <h2>Login</h2>
                <div className="inputWrapper">
                    <label htmlFor="email" >Email</label>
                    <input
                        name='email'
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleIsValid}
                    />
                    {validationMsg.email && <p className="validationP">{validationMsg.email}</p>}
                </div>
                <div className="inputWrapper">
                    <label htmlFor="password" >Password</label>
                    <input
                        name="password"
                        type="password"
                        suggested="current-password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {validationMsg.password && <p className="validationP">{validationMsg.password}</p>}
                </div>

                <input type="submit" value='LOGIN' disabled={isDisabled} />
            </form>
        </>
    )
}