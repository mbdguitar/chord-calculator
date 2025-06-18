import React from "react";
import Key from '../components/Key'
import styles from '../modules/Key.module.css';

function KeyContainer({ name, keyColor }) {

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
        if (color === 'white') {
            className = `${getColor(color)}`
        } else {
            className = `${getColor(color)} ${getSharpName(name)}`
        }

        return className;
    }

    return (
        <>
            <Key className={getClassName(name, keyColor)}/>
        </>
    )
}

export default KeyContainer;