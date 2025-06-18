import React from "react";
import Octave from "./Octave.js"
import keysGenerator from '../functions/keysGenerator.js';
import styles from '../modules/Keyboard.module.css'

function Keyboard() {
    const keys = keysGenerator();

    return (
        <div className={styles.keyboard_container}>
            {keys.map((octave) => {
                let octaveKeys = octave;
                return <Octave octaveKeys={octaveKeys}/>
            })}
        </div>
    );
}

export default Keyboard;