import React from "react";
import styles from "../modules/Navbar.module.css"

function Navbar() {
    return (
        <header>
            <nav className={styles.nav}>
                <div className={styles.title}>
                    <h1>Chord Calculator</h1>
                    <p>Created by Miguel Barreto | v1.0</p>
                </div>
                <div className={styles.menu}>
                    <ul>
                        <li><a href='/home'>Home</a></li>
                        <li><a href='/about'>About</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;