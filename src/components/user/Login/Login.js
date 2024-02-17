import { useEffect } from "react"

export function Login() {
    useEffect(() => {
        document.querySelector('div.contentWrapper').style.height = '70vh'
        return () => {
            document.querySelector('div.contentWrapper').style.height = '100vh'
        }
    }, [])

    return (
        <form method="POST" id="loginForm">
            <div>
                <label htmlFor="email" >Email</label>
                <input name='email' type="email" />
            </div>
            <div>
                <label htmlFor="password" >Password</label>
                <input name="password" type="password" />
            </div>
            <input type="submit" value='LOGIN' />
        </form>
    )
}