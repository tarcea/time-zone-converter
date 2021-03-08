import React from 'react';
import styles from './navbar.module.css';
import logo from "../../assets/globuzzerLogo.png"

export default function Navbar() {
    return (
        <>
            <ul className={styles.navBar}>
                <li className={styles.logo}>
                    <a href="https://globuzzer.com/" target="_blank" rel="noopener noreferrer">
                        <img 
                        src={logo}
                        alt="Globuzzer"
                        />
                    </a>
                </li>
                <li>Help</li>
            </ul>
        </>
    )
}
