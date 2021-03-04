import React from 'react';
import '../styles/navbar.css';

export default function Navbar() {
    return (
        <>
            <ul className="navBar">
                <li className="logo">
                    <a href="https://globuzzer.com/" target="_blank">GLOBUZZER</a>
                </li>
                <li>Help</li>
            </ul>
        </>
    )
}
