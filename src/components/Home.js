import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { noteSorter } from '../functions/noteSorter';
import chordCalculator from '../functions/chordCalculator';
import getIntervals from '../functions/getIntervals';
import Keyboard from './Keyboard/Keyboard';
import RootForm from './RootForm';
import ErrorMessage from './ErrorMessage';
import CalculateButton from './CalculateButton';
import ChordDisplay from './ChordDisplay';
import styles from '../modules/Home.module.css';

function Home() {
    const [ keys, setKeys ] = useState([]) ;
    const [ root, setRoot ] = useState('');
    const [ chord, setChord ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('')

    useEffect(() => {
        setKeys(noteSorter(keys));
    }, [keys])

    function sendKeys(array) {
        setKeys(array);
    }

    function getRoot({ target }) {
        setRoot(target.value);
    }

    function removeErrorMessage() {
        setErrorMessage('')
    }

    function updateChord() {
        let result = chordCalculator(getIntervals(keys, root), root);
        if (typeof result === 'string') {
            setErrorMessage(result)
        } else {
            setChord(result);
        }
    }

    return (
        <motion.div 
            className={styles.home}
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{transition: 0.1}}
        >
            <ChordDisplay chord={chord}/>
            <Keyboard sendKeys={sendKeys}/>
            {errorMessage !== '' ? <ErrorMessage errorMessage={errorMessage} removeErrorMessage={removeErrorMessage}/> : ''}
            <RootForm getRoot={getRoot} keys={keys}/>
            <CalculateButton updateChord={updateChord}/>
        </motion.div>
    );
} 
 
export default Home;