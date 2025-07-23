import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import chordCalculator from '../functions/chordCalculator';
import getIntervals from '../functions/getIntervals';
import Fretboard from '../components/Fretboard/Fretboard';
import RootNoteInput from '../components/RootNoteInput';
import ErrorMessage from '../components/ErrorMessage';
import CalculateButton from '../components/CalculateButton';
import ChordDisplay from '../components/ChordDisplay';
import styles from '../modules/FretboardContainer.module.css';

function FretboardContainer() {
    const [ notes, setNotes ] = useState([]) ;
    const [ root, setRoot ] = useState('');
    const [ chord, setChord ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('')

    useEffect(() => {
        removeErrorMessage();
    }, [notes, root, chord]);

    const sendNotes = useCallback((array) => {
        setNotes(array);
    }, [])

    function getRoot(root) {
        setRoot(root);
    }

    function removeErrorMessage() {
        setErrorMessage('')
    }

    function updateChord() {
        let result = chordCalculator(getIntervals(notes, root), root);
        if (typeof result === 'string') {
            setErrorMessage(result)
        } else {
            setChord(result);
        }
    }

    return (
        <motion.div 
            className={styles.fretboard_container}
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{transition: 0.1}}
        >
            <ChordDisplay chord={chord}/>
            <Fretboard sendNotes={sendNotes}/>
            {errorMessage !== '' ? <ErrorMessage errorMessage={errorMessage} removeErrorMessage={removeErrorMessage}/> : ''}
            <RootNoteInput notes={notes} getRoot={getRoot}/>
            <CalculateButton updateChord={updateChord}/>
        </motion.div>
    );
} 
 
export default FretboardContainer;