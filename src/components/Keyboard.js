import React, { useState, useEffect, useCallback } from "react";
import useWindowWidth from "../hooks/useWindowWidth.js";
import Octave from "./Octave.js"
import keysGenerator from '../functions/keysGenerator.js';
import styles from '../modules/Keyboard.module.css'

function Keyboard({ sendKeys }) {
    const [ keysToRender, setKeysToRender ] = useState(keysGenerator())
    const [ activeKeys, setActiveKeys ] = useState([])
    const { width } = useWindowWidth();

    useEffect(() => {
        sendKeys(activeKeys)
    }, [activeKeys, sendKeys])

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
            <div className={styles.keyboard_container}>
                {keysToRender.map((octave) => {
                    let octaveKeys = octave;
                    return <Octave octaveKeys={octaveKeys} updateActiveKeys={updateActiveKeys}/>
                })}
            </div>
        </>
    );
}

export default Keyboard;