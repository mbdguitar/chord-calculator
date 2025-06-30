import React from "react";
import styles from '../modules/ChordDisplay.module.css'

function ChordDisplay({ chord }) {
    return (
        <div className={styles.chord_container}>
            <div>
                <h1>{chord.name}</h1>
            </div>
            <div>
                {chord.intervals ? <p>{chord.intervals.join(", ")}</p> : <p>Please select a chord</p>}
            </div>
        </div>
    )
}

export default ChordDisplay