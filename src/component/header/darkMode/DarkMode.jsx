import React, { useContext } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";
import DarkthemeContext from "../../../utils/DarkthemeContext";

const DarkMode = () => {

    const { setIsDarkTheme } = useContext(DarkthemeContext)

    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
        setIsDarkTheme(true)
    }

    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')
        setIsDarkTheme(false)
    }

    const selectedTheme = localStorage.getItem('theme')

    if (selectedTheme === 'dark') {
        setDarkMode()
    }

    const toogleTheme = (e) => {
        if (e.target.checked) setDarkMode()
        else setLightMode()
    }

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toogleTheme}
                defaultChecked={selectedTheme === 'dark'}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
