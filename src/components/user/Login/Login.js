import { useEffect, useState } from "react"

import { useForm } from "../../hooks/useForm"

export function Login() {
    const [values, changeValues, onSubmit] = useForm({
        email: "",
        password: ""
    }, handleLoginSubmit)

    useEffect(() => {
        document.querySelector('div.contentWrapper').style.height = '70vh'
        return () => {
            document.querySelector('div.contentWrapper').style.height = '100vh'
        }
    }, [])

    function handleLoginSubmit(data) {
        console.log(data);
    }

    return (
        <form method="POST" id="loginForm" onSubmit={onSubmit}>
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
                <label htmlFor="password" >Password</label>
                <input
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={changeValues}
                />
            </div>
            <input type="submit" value='LOGIN' />
        </form>
    )
}