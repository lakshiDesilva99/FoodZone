import { useState, useEffect } from "react";
import darkPng from "../../assets/website/dark-mode-button.png";
import lightPng from "../../assets/website/light-mode-button.png";

const DarkMode = () => {
    // State to keep track of dark mode status
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggle dark mode and set the theme
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    // Load saved theme from local storage on initial render
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    // Save theme to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    return (
        <div className="relative">
            {isDarkMode ? (
                <img
                    src={lightPng}
                    alt="Light Mode"
                    onClick={toggleDarkMode}
                    className="w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
                />
            ) : (
                <img
                    src={darkPng}
                    alt="Dark Mode"
                    onClick={toggleDarkMode}
                    className="w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
                />
            )}
        </div>
    );
};

export default DarkMode;
