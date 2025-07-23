import React, { useState, useEffect } from "react";
import RootNoteButton from "./RootNoteButton";
import removeDuplicateRoots from "../functions/removeDuplicateRoots";
import styles from '../modules/RootNoteInput.module.css'

function RootNoteInput({ notes, getRoot }) {
    const [ activeRoot, setActiveRoot ] = useState('');
    const uniqueNotes = removeDuplicateRoots([ ...notes ]);

    //Resets the active root if that note is no longer on the array of active notes
    useEffect(() => {
        const isNoteStillActive = notes.find((note) => note.name === activeRoot);
        if (!isNoteStillActive) {
            setActiveRoot('')
        }
    }, [notes, activeRoot]);

    //sends the active root to parent element when activeRoot exists
    useEffect(() => {
        if (activeRoot) {
            getRoot(activeRoot);
        }
    }, [activeRoot, getRoot])

    //handles click event to set activeRoot
    function handleActiveNote(e) {
        const noteToSet = e.target.value;
        setActiveRoot(noteToSet);
    }

    return (
    <div className={styles.root_note_input}>
        {activeRoot ? <p>Root: <strong>{activeRoot}</strong></p> : <p>Please select a root</p>}
        <div className={styles.root_note_input_buttons_container}>
            {uniqueNotes.map((note) => {
                return <RootNoteButton note={note.name} handleActiveNote={handleActiveNote}/>
            })}
        </div>
    </div>
    )
}

export default RootNoteInput;