import React, { useState, useEffect } from "react";
import Octave from "./Octave.js"
import keysGenerator from '../functions/keysGenerator.js';
import styles from '../modules/Keyboard.module.css'

function Keyboard() {
    const [ activeKeys, setActiveKeys ] = useState([])

    function updateActiveKeys(key) {
        if (key.isActive) {
            setActiveKeys((prev) => {
                return [key, ...prev];
            })
        } else if (!key.isActive) {
            setActiveKeys((prev) => {
                return [...prev].filter((k) => k.id !== key.id);
            })
        }
    }

    const keys = keysGenerator();

    return (
        <>
            <div className={styles.keyboard_container}>
                {keys.map((octave) => {
                    let octaveKeys = octave;
                    return <Octave octaveKeys={octaveKeys} updateActiveKeys={updateActiveKeys}/>
                })}
            </div>
            <div>
                {activeKeys.map((k) => {
                    return <p>{k.name /*Code to remove after testing */}</p>
                })}
            </div>
        </>
    );
}

export default Keyboard;