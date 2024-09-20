import React, { useState } from 'react';
import useDarkSide from './useDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Switcher() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(colorTheme === 'dark' ? true : false);

    const toggleDarkMode = checked => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };

    return (
        <>
            <div>
                <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={30} style={{ backgroundColor: darkSide ? 'rgb(0 0 0 / 30%)' : 'rgb(255 255 255 / 30%)', padding: '0.4rem', borderRadius: '100%' }} moonColor='#121212' sunColor='#f9f9f9' />
            </div>
        </>
    );
}