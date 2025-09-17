import React, { useState } from 'react';
import Container from './Container';
import ThemeToggle from './ThemeToggle';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';

export default function Navbar({ theme, setTheme }) {
    const auth = useSelector((s) => s.auth);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white/80 dark:bg-gray-900/60 backdrop-blur sticky top-0 z-30 border-b border-gray-100 dark:border-gray-800">
            <Container>
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-4">
                        {/* <div className="text-lg font-bold">Devraj Thakur</div> */}
                        {/* <div className="hidden md:block text-sm text-gray-600 dark:text-gray-300">Senior Software Developer</div> */}
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <a href="#about" className="text-sm hover:underline">About</a>
                        <a href="#resume" className="text-sm hover:underline">Resume</a>
                        <a href="#projects" className="text-sm hover:underline">Projects</a>
                        {/* <ThemeToggle theme={theme} setTheme={setTheme} /> */}
                        {/* {auth.isLoggedIn ? (
                            <div className="flex items-center gap-2">
                                <span className="text-sm">Hi, {auth.user.username}</span>
                                <button onClick={() => dispatch(logout())} className="text-sm px-3 py-1 border rounded">Logout</button>
                            </div>
                        ) : (
                            <a href="#login" className="text-sm px-3 py-1 border rounded">Login</a>
                        )} */}
                    </div>

                    {/* mobile */}
                    <div className="md:hidden flex items-center gap-2">
                        {/* <ThemeToggle theme={theme} setTheme={setTheme} /> */}
                        <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="p-2 rounded">
                            {open ? '✖' : '☰'}
                        </button>
                    </div>
                </div>

                {open && (
                    <div className="md:hidden py-3 flex flex-col gap-2">
                        <a href="#about" className="text-sm">About</a>
                        <a href="#resume" className="text-sm">Resume</a>
                        <a href="#projects" className="text-sm">Projects</a>
                        {/* {auth.isLoggedIn ? (
                            <button onClick={() => dispatch(logout())} className="text-sm text-left">Logout</button>
                        ) : (
                            <a href="#login" className="text-sm">Login</a>
                        )} */}
                    </div>
                )}
            </Container>
        </nav>
    );
}