import { NavLink } from 'react-router-dom';

import './Navigation.css'

export function Navigation() {
    return (
        <header>
            <nav className='contentWrapper'>
                <div id='logo'>
                    <NavLink to='/catalog'>
                        <img src="logo.jpg"></img>
                    </NavLink></div>
                <div id='links'>
                    {/* For everyone */}
                    <NavLink to='/catalog'>Catalog</NavLink>
                    <NavLink to='/login'>Login</NavLink>
                    <NavLink to='/register'>Register</NavLink>
                    {/* For authenticated */}
                    <NavLink to='/profile'>Profile</NavLink>
                    <NavLink to='/logout'>Logout</NavLink>
                </div>

            </nav>
        </header>
    );
}