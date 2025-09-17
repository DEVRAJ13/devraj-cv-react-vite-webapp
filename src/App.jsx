import './App.css'
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import LoginPanel from './components/LoginPanel';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors">
        <Navbar theme={theme} setTheme={setTheme} />
        <main className="pt-4">
          <Hero />
          <About />
          <Resume />
          <Projects />
          {/* <LoginPanel /> */}
          <Contact />
        </main>

        <footer className="py-6 mt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Devraj Thakur — Built with React + Redux</div>
        </footer>
      </div>
    </Provider>
  )
}

export default App
