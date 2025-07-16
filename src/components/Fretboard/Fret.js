import React from 'react';
import styles from '../../modules/Fret.module.css'

function Fret({ fretObj, handleActiveFret }) {
    // sets the name of the class for each of the frets
    let className;
    if (fretObj.fretNumber !== 0) {
        className=`${styles.fret}`;
    } else {
        className=`${styles.open_string}`;
    }

    return (
        <>
            <div className={className} onClick={() => handleActiveFret(fretObj.id)}>
                {fretObj.isActive ? <div className={styles.active_fret}><p>{fretObj.name}</p></div> : <></>}
            </div>
        </>
    )
}

export default Fret;