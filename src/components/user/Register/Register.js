import { useEffect, useState } from "react"

export function Register() {
    const [values, setValues] = useState({
        email: "",
        username: "",
        password: "",
        rePass: "",
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

    function handleRegisterSubmit(e) {
        e.preventDefault();

        console.log(values);
    }

    return (
        <form method="POST" id="registerForm" onSubmit={handleRegisterSubmit}>
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
                <label htmlFor="username" >Username</label>
                <input
                    name='username'
                    type="text"
                    value={values.username}
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
            <div>
                <label htmlFor="rePass" >Repeat password</label>
                <input
                    name="rePass"
                    type="password"
                    value={values.rePass}
                    onChange={handleChange}

                />
            </div>
            <input type="submit" value='Register' />
        </form>
    )
}