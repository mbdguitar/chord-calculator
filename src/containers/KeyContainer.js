import React, { useState, useEffect } from "react";
import Key from '../components/Key'
import styles from '../modules/KeyContainer.module.css';

function KeyContainer({ keyObj, updateActiveKeys }) {
    const [ activeKey, setActiveKey ] = useState(keyObj);

    useEffect(() => {
        updateActiveKeys(activeKey);
    }, [activeKey]);

    function getColor(color) {
        if (color === 'white') {
            return styles.white
        } else if (color === 'black') {
            return styles.black
        }
    }

    function getSharpName(name) {
        switch(name[0]) {
            case 'C':
                return styles.cs;
            case 'D':
                return styles.ds
            case 'F':
                return styles.fs
            case 'G':
                return styles.gs
            case 'A':
                return styles.as
            default:
                throw new Error('Error: Note name not valid')
        }
    }

    function getClassName(name, color) {
        let className;
        if (color === 'white' && activeKey.isActive) {
            className = `${getColor(color)} ${styles.white_active}`
        } else if (color === 'white' && !activeKey.isActive) {
            className = `${getColor(color)}`
        } else if (color === 'black' && activeKey.isActive) {
            className = `${getColor(color)} ${getSharpName(name)} ${styles.black_active}`
        } else {
            className = `${getColor(color)} ${getSharpName(name)}`
        }

        return className;
    }

    function handleToggle(e) {
        setActiveKey((prev) => {
            if (activeKey.isActive) {
                return {
                    ...prev, 
                    isActive: false,
                }
            } else {
                return {
                    ...prev, 
                    isActive: true,
                }
            }
        })
    }

    return (
        <>
            <Key 
                className={getClassName(activeKey.name, activeKey.keyColor)} 
                handleToggle={handleToggle} 
                name={activeKey.name}
            />
        </>
    )
}

export default KeyContainer;