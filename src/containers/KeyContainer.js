import React, { useState } from "react";
import Key from '../components/Key'
import styles from '../modules/Key.module.css';

function KeyContainer(props) {
    const [ keyIsActive, setKeyIsActive ] = useState(props.keyObj.isActive);

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
        }
    }

    function getClassName(name, color) {
        let className;
        if (color === 'white' && keyIsActive) {
            className = `${getColor(color)} ${styles.white_active}`
        } else if (color === 'white' && !keyIsActive) {
            className = `${getColor(color)}`
        } else if (color === 'black' && keyIsActive) {
            className = `${getColor(color)} ${getSharpName(name)} ${styles.black_active}`
        } else {
            className = `${getColor(color)} ${getSharpName(name)}`
        }

        return className;
    }

    function handleToggle() {
        setKeyIsActive(!keyIsActive)
    }

    return (
        <>
            <Key 
                className={getClassName(props.keyObj.name, props.keyObj.keyColor)} 
                keyObj={props.keyObj} 
                handleToggle={handleToggle} 
            />
        </>
    )
}

export default KeyContainer;