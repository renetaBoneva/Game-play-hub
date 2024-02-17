import { useEffect } from "react"

export function Register() {
    useEffect(() => {
        document.querySelector('div.contentWrapper').style.height = '70vh'
        return () => {
            document.querySelector('div.contentWrapper').style.height = '100vh'
        }
    }, [])

    return (
        <form method="POST" id="registerForm">
            <div>
                <label htmlFor="email" >Email</label>
                <input name='email' type="email" />
            </div>
            <div>
                <label htmlFor="username" >Username</label>
                <input name='username' type="text" />
            </div>
            <div>
                <label htmlFor="password" >Password</label>
                <input name="password" type="password" />
            </div>
            <div>
                <label htmlFor="rePass" >Repeat password</label>
                <input name="rePass" type="password" />
            </div>
            <input type="submit" value='Register' />
        </form>
    )
}