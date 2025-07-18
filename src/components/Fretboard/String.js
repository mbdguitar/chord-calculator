import React, { useState, useEffect } from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';
import Fret from './Fret';
import fretsGenerator from '../../functions/fretsGenerator';
import styles from '../../modules/String.module.css'

function String({ tuning, stringNumber, updateActiveFrets }) {
    const [ fretsToRender, setFretsToRender ] = useState(fretsGenerator(tuning, stringNumber));
    const [ frets, setFrets ] = useState(fretsToRender); 
    const [ lastActiveFret, setLastActiveFret ] = useState ({});
    const { width } = useWindowWidth();

    useEffect(() => {
        setFretsToRender(fretsGenerator(tuning, stringNumber))
    }, [width])

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