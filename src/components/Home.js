import React, { useState, useEffect } from 'react';
import { noteSorter } from '../functions/noteSorter';
import chordCalculator from '../functions/chordCalculator';
import getIntervals from '../functions/getIntervals';
import Keyboard from './Keyboard';
import RootForm from './RootForm';
import CalculateButton from './CalculateButton';
import ChordDisplay from './ChordDisplay';
import styles from '../modules/Home.module.css';

function Home() {
    const [ keys, setKeys ] = useState([]) ;
    const [ root, setRoot ] = useState('');
    const [ chord, setChord ] = useState('');

    useEffect(() => {
        setKeys(noteSorter(keys));
    }, [keys])

    function sendKeys(array) {
        setKeys(array);
    }

    function getRoot({ target }) {
        setRoot(target.value);
    }

    function updateChord() {
        setChord(chordCalculator(getIntervals(keys, root), root));
    }

    return (
        <div className={styles.home}>
            <ChordDisplay chord={chord}/>
            <Keyboard sendKeys={sendKeys}/>
            <RootForm getRoot={getRoot} keys={keys}/>
            <CalculateButton updateChord={updateChord}/>
        </div>
    );
} 
 
export default Home;