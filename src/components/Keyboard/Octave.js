import React from "react";
import KeyContainer from '../../containers/KeyContainer';
import styles from '../../modules/Octave.module.css'

function Octave({ octaveKeys, updateActiveKeys }) {
    return (
        <div className={styles.octave}>
            <div className={styles.top_row}>
                {octaveKeys.filter((key) => key.keyColor === 'black').map((key) => {
                    return <KeyContainer keyObj={key} updateActiveKeys={updateActiveKeys}/>

                })}
            </div>
            <div className={styles.bottom_row}>
                {octaveKeys.filter((key) => key.keyColor === 'white').map((key) => {
                    return <KeyContainer keyObj={key} updateActiveKeys={updateActiveKeys}/>
                })}
            </div>
        </div>
    )
}

export default Octave;