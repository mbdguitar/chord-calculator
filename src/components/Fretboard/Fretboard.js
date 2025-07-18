import React, { useState, useEffect, useCallback } from 'react';
import String from './String';
import styles from '../../modules/Fretboard.module.css';

function Fretboard({ sendNotes }) {
    const [ strings ] = useState([['E', 1], ['B', 2], ['G', 3], ['D', 4], ['A', 5], ['E', 6]]);
    const [ activeFrets, setActiveFrets ] = useState([]);

    useEffect(() => {
        sendNotes(activeFrets)
    }, [activeFrets, sendNotes]);

    const updateActiveFrets = useCallback((fret) => {
        if (fret?.isActive) {
            setActiveFrets((prev) => {
                return [...prev, fret];
            })
        } else if (!fret.isActive) {
            setActiveFrets((prev) => {
                return [...prev].filter((f) => f.id !== fret.id);
            })
        }
    }, [])

    return (
        <div className={styles.fretboard}>
            {strings.map((string) => {
                return <String tuning={string[0]} stringNumber={string[1]} updateActiveFrets={updateActiveFrets}/>
            })}
        </div>
    )
}

export default Fretboard;

