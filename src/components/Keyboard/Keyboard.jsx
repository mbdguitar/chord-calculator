import { useState, useEffect, useCallback } from "react";
import { noteSorter } from "../../functions/noteSorter";
import useWindowWidth from "../../hooks/useWindowWidth";
import Octave from "./Octave"
import keysGenerator from '../../functions/keysGenerator';
import styles from '../../modules/Keyboard.module.css'

function Keyboard({ sendNotes }) {
    const [keysToRender, setKeysToRender] = useState(keysGenerator())
    const [activeKeys, setActiveKeys] = useState([])
    const { width } = useWindowWidth();

    useEffect(() => {
        const notesToSend = noteSorter([...activeKeys])
        sendNotes(notesToSend)
    }, [activeKeys, sendNotes])

    useEffect(() => {
        setKeysToRender(keysGenerator());
    }, [width])

    const updateActiveKeys = useCallback((key) => {
        if (key.isActive) {
            setActiveKeys((prev) => {
                return [...prev, key];
            })
        } else if (!key.isActive) {
            setActiveKeys((prev) => {
                return [...prev].filter((k) => k.id !== key.id);
            })
        }
    }, [])

    return (
        <>
            <div className={styles.keyboard}>
                {keysToRender.map((octave) => {
                    let octaveKeys = octave;
                    return <Octave octaveKeys={octaveKeys} updateActiveKeys={updateActiveKeys} />
                })}
            </div>
        </>
    );
}

export default Keyboard;