import { useEffect, useState } from 'react';

const useThemeEffect = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        const saved = localStorage.getItem('theme');
        return saved === 'light' || saved === 'dark' ? saved : 'dark';
    });

    useEffect(() => {
        document.body.dataset.mode = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    return { theme, setTheme };
};

export default useThemeEffect;
