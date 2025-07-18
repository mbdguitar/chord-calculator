import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { noteSorter } from '../functions/noteSorter';
import chordCalculator from '../functions/chordCalculator';
import getIntervals from '../functions/getIntervals';
import Keyboard from '../components/Keyboard/Keyboard';
import RootForm from '../components/RootForm';
import ErrorMessage from '../components/ErrorMessage';
import CalculateButton from '../components/CalculateButton';
import ChordDisplay from '../components/ChordDisplay';
import styles from '../modules/KeyboardContainer.module.css';

function KeyboardContainer() {
    const [ notes, setNotes ] = useState([]) ;
    const [ root, setRoot ] = useState('');
    const [ chord, setChord ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('')

    useEffect(() => {
        setNotes(noteSorter(notes));
    }, [notes])

    function sendNotes(array) {
        setNotes(array);
    }

    function getRoot({ target }) {
        setRoot(target.value);
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
            className={styles.keyboard_container}
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{transition: 0.1}}
        >
            <ChordDisplay chord={chord}/>
            <Keyboard sendNotes={sendNotes}/>
            {errorMessage !== '' ? <ErrorMessage errorMessage={errorMessage} removeErrorMessage={removeErrorMessage}/> : ''}
            <RootForm getRoot={getRoot} keys={notes}/>
            <CalculateButton updateChord={updateChord}/>
        </motion.div>
    );
} 
 
export default KeyboardContainer;