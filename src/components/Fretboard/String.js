import React, { useState, useEffect } from 'react';
import Fret from './Fret';
import fretsGenerator from '../../functions/fretsGenerator';
import styles from '../../modules/String.module.css'

function String({ tuning, stringNumber, updateActiveFrets }) {
    const [ frets, setFrets ] = useState(fretsGenerator(tuning, stringNumber)); 
    const [ lastActiveFret, setLastActiveFret ] = useState ({});

    useEffect(() => {
        let activeFret = frets.find((fret) => fret.isActive)
        if (activeFret) {
            updateActiveFrets({ ...lastActiveFret, isActive: false})
            updateActiveFrets(activeFret)
        } else {
            updateActiveFrets({ ...lastActiveFret, isActive: false})
        }
    }, [frets, updateActiveFrets]);

    useEffect(() => {
        let activeFret = frets.find((fret) => fret.isActive)
        if (activeFret) {
            setLastActiveFret(activeFret);
        }
    }, [frets, setLastActiveFret]);

    function handleActiveFret(fretId) {
        const currentActiveFret = frets.find(fret => fret.isActive);
        const isSameFretClicked = currentActiveFret?.id === fretId;
        const updatedFrets = frets.map((fret) => ({
            ...fret,
            isActive: isSameFretClicked ? false : fret.id === fretId
        }));
        setFrets(updatedFrets);
    }

    return (
        <div className={styles.string}>
            {frets.map((fret) => {
                return <Fret 
                    key={fret.id}
                    fretObj={fret} 
                    handleActiveFret={handleActiveFret}
                />
            })}
        </div>
    );
}

export default String;