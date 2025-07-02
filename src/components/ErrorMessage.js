import React from "react";
import styles from '../modules/ErrorMessage.module.css';

function ErrorMessage({ errorMessage, removeErrorMessage }) {
    return (
        <div className={styles.error_message}>
            <p>{errorMessage}</p>
            <button onClick={removeErrorMessage}>X</button>
        </div>
    )
}

export default ErrorMessage;