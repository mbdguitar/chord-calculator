import React from "react";
import { NavLink } from "react-router-dom";
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
                        <li><NavLink to='/home' className={ ({isActive}) => isActive? `${styles.nav_link_active}` : `${styles.nav_link_inactive}`}>Home</NavLink></li>
                        <li><NavLink to='/about' className={ ({isActive}) => isActive? `${styles.nav_link_active}` : `${styles.nav_link_inactive}`}>About</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;