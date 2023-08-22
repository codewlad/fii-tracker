import React, { useState, useEffect } from 'react';

export function themeConfig() {
    const [theme, setTheme] = useState("themeLight");

    const setMode = mode => {
        window.localStorage.setItem("@fiitracker:theme", mode);
        setTheme(mode);
    };

    const toggleTheme = () => {
        theme === "themeLight" ? setMode("themeDark") : setMode("themeLight");
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem("@fiitracker:theme");
        localTheme ? setTheme(localTheme) : setMode("themeLight");
    }, []);

    return { theme, toggleTheme };
}
