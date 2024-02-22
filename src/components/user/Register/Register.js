import { useEffect, useState } from "react"

import { useForm } from "../../hooks/useForm"

export function Register() {
    const [values, changeValues, onSubmit] = useForm({
        email: "",
        username: "",
        password: "",
        rePass: "",
    }, handleRegisterSubmit)

    useEffect(() => {
        document.querySelector('div.contentWrapper').style.height = '70vh'
        return () => {
            document.querySelector('div.contentWrapper').style.height = '100vh'
        }
    }, [])

    function handleRegisterSubmit(data) {
        console.log(data);
    }

    return (
        <form method="POST" id="registerForm" onSubmit={onSubmit}>
            <div> 
                <label htmlFor="email" >Email</label>
                <input
                    name='email'
                    type="email"
                    value={values.email}
                    onChange={changeValues}

                />
            </div>
            <div>
                <label htmlFor="username" >Username</label>
                <input
                    name='username'
                    type="text"
                    value={values.username}
                    onChange={changeValues}

                />
            </div>
            <div>
                <label htmlFor="password" >Password</label>
                <input
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={changeValues}

                />
            </div>
            <div>
                <label htmlFor="rePass" >Repeat password</label>
                <input
                    name="rePass"
                    type="password"
                    value={values.rePass}
                    onChange={changeValues}

                />
            </div>
            <input type="submit" value='Register' />
        </form>
    )
}