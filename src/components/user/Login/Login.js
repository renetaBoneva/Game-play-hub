import { useEffect, useState } from "react"

export function Login() {
    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    useEffect(() => {
        document.querySelector('div.contentWrapper').style.height = '70vh'
        return () => {
            document.querySelector('div.contentWrapper').style.height = '100vh'
        }
    }, [])

    function handleChange(e) {
        setValues(values => ({ ...values, [e.target.name]: e.target.value }));
    }

    function handleLoginSubmit(e) {
        e.preventDefault();

        console.log(values);
    }

    return (
        <form method="POST" id="loginForm" onSubmit={handleLoginSubmit}>
            <div>
                <label htmlFor="email" >Email</label>
                <input
                    name='email'
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password" >Password</label>
                <input
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                />
            </div>
            <input type="submit" value='LOGIN' />
        </form>
    )
}