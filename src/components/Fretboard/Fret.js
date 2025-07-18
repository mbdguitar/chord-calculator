import React from 'react';
import styles from '../../modules/Fret.module.css'

function Fret({ fretObj, handleActiveFret }) {
    // sets the name of the class for each of the frets
    let className;
    if (fretObj.isActive) {
        className=`${styles.fret_active}`;
    } else {
        className=`${styles.fret}`;
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