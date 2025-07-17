import React from 'react';
import styles from '../../modules/Fret.module.css'

function Fret({ fretObj, handleActiveFret }) {
    // sets the name of the class for each of the frets
    let className;
    if (fretObj.fretNumber !== 0 && fretObj.isActive) {
        className=`${styles.fret_active}`;
    } else if (fretObj.fretNumber !== 0 && !fretObj.isActive) {
        className=`${styles.fret}`;
    } else if (fretObj.fretNumber === 0 && fretObj.isActive) {
        className=`${styles.open_active}`;
    } else {
        className=`${styles.open}`;
    }

    return (
        <>
            <div className={className} onClick={() => handleActiveFret(fretObj.id)}>
                {fretObj.isActive ? <p>{fretObj.name}</p> : <></>}
            </div>
        </>
    )
}

export default Fret;