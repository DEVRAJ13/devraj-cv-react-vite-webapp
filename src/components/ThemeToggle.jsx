export default function ThemeToggle({ theme, setTheme }) {
    const toggle = () => setTheme(theme === 'light' ? 'dark' : 'light');
    return (
        <button onClick={toggle} aria-label="Toggle theme" className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
    );
}