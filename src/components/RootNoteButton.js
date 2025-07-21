import React from "react";
import styles from '../modules/RootNoteButton.module.css'

function RootNoteButton({ note, handleActiveNote }) {
    return (
        <button className={styles.root_note_button} onClick={handleActiveNote} value={note}>
            {note}
        </button>
    )
}

export default RootNoteButton;