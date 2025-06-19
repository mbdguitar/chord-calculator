import React from "react";
import KeyContainer from '../containers/KeyContainer';
import styles from '../modules/Octave.module.css'

function Octave({ octaveKeys }) {
    return (
        <div className={styles.octave}>
            <div className={styles.top_row}>
                {octaveKeys.map((key) => {
                    if (key.keyColor === 'black') {
                        return <KeyContainer keyObj={key}/>
                    }
                })}
            </div>
            <div className={styles.bottom_row}>
                {octaveKeys.map((key) => {
                    if (key.keyColor === 'white') {
                        return <KeyContainer keyObj={key}/>
                    }
                })}
            </div>
        </div>
    )
}

export default Octave;