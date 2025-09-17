import React, { useState } from 'react';
import Container from './Container';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/authSlice';

export default function LoginPanel() {
    const dispatch = useDispatch();
    const auth = useSelector((s) => s.auth);
    const [username, setUsername] = useState('');

    const handleLogin = () => {
        if (!username.trim()) return;
        dispatch(login({ username }));
        setUsername('');
    };

    if (auth.isLoggedIn) return null;

    return (
        <section id="login" className="py-6">
            <Container>
                <div className="p-4 bg-white dark:bg-gray-800 border rounded max-w-md">
                    <h3 className="font-semibold mb-2">Login (demo)</h3>
                    <div className="flex gap-2">
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter username"
                            className="flex-1 px-3 py-2 border rounded dark:bg-gray-700"
                        />
                        <button onClick={handleLogin} className="px-3 py-2 bg-indigo-600 text-white rounded">Login</button>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">This is a client-only demo login using Redux state.</p>
                </div>
            </Container>
        </section>
    );
}