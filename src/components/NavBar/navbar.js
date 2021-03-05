import React from 'react';
import styles from './navbar.module.css';

export default function Navbar() {
    return (
        <>
            <ul className={styles.navBar}>
                <li className={styles.logo}>
                    <a href="https://globuzzer.com/" target="_blank">GLOBUZZER</a>
                </li>
                <li>Help</li>
            </ul>
        </>
    )
}
