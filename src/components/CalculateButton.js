import React from "react";
import styles from '../modules/CalculateButton.module.css';

function CalculateButton({ updateChord }) {

    return (
        <div className={styles.calculate_button}>
            <button onClick={updateChord}>Calculate</button>
        </div>
    )
}

export default CalculateButton;