import React from "react";
import styles from '../modules/InstrumentMenu.module.css';

function InstrumentMenu({ handleInstrumentMenuButton }) {
    return (
        <div className={styles.button_container}>
            <button onClick={handleInstrumentMenuButton} name={'Piano'}>Piano</button>
            <button onClick={handleInstrumentMenuButton} name={'Guitar'}>Guitar</button>
        </div>
    )
}

export default InstrumentMenu;