import { NavLink } from 'react-router-dom';

import './Navigation.css'
import { useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated, isUserOrGuest } = useAuthContext();

    function handleMobileMenu() {
        setIsOpen(x => !x)
    }

    return (
        <header>
            <nav className={isOpen ? '' : 'contentWrapper'}>
                <div id='logo'>
                    <NavLink to='/catalog'>
                        <img src="logo.jpg" alt='logo'></img>
                    </NavLink></div>
                {isUserOrGuest &&
                    <>
                        <div id='links'>
                            {/* For everyone */}
                            <NavLink to='/catalog'>Catalog</NavLink>
                            {/* For not authenticated */}
                            {!isAuthenticated && <>
                                <NavLink to='/login'>Login</NavLink>
                                <NavLink to='/register'>Register</NavLink>
                            </>}
                            {isAuthenticated && <>
                                {/* For authenticated */}
                                <NavLink to='/profile'>Profile</NavLink>
                                <NavLink to='/logout'>Logout</NavLink>
                            </>}
                        </div>

                        <div id='links-mobile'>
                            <svg onClick={handleMobileMenu} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z"></path>
                            </svg>
                            <div className='links-wrapper' style={isOpen ? { display: "flex" } : { display: "none" }}>
                                {/* For everyone */}
                                <NavLink to='/catalog' onClick={handleMobileMenu}>Catalog</NavLink>
                                {!isAuthenticated && <>
                                    <NavLink to='/login' onClick={handleMobileMenu}>Login</NavLink>
                                    <NavLink to='/register' onClick={handleMobileMenu}>Register</NavLink>
                                </>}
                                {isAuthenticated && <>
                                    {/* For authenticated */}
                                    <NavLink to='/profile' onClick={handleMobileMenu}>Profile</NavLink>
                                    <NavLink to='/logout' onClick={handleMobileMenu}>Logout</NavLink>
                                </>}
                            </div>
                        </div>
                    </>
                }
            </nav>
        </header>
    );
}