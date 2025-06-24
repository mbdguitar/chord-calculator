import React, { useState, useEffect } from 'react';
import { noteSorter } from '../functions/noteSorter';
import getIntervals from '../functions/getIntervals';
import Keyboard from './Keyboard';
import RootForm from './RootForm';
import CalculateButton from './CalculateButton';

function Home() {
    const [ keys, setKeys ] = useState([]) 
    const [ root, setRoot ] = useState('')
    const [ intervals, setIntervals ] = useState([])

    useEffect(() => {
        setKeys(noteSorter(keys))
    }, [keys])

    function sendKeys(array) {
        setKeys(array);
    }

    function getRoot({ target }) {
        setRoot(target.value)
    }

    function updateIntervals() {
        setIntervals(getIntervals(keys, root));
    }

    return (
        <>
            <Keyboard sendKeys={sendKeys}/>
            <RootForm getRoot={getRoot} keys={keys}/>
            <CalculateButton updateIntervals={updateIntervals}/>
            <div>
                {intervals ? intervals.map((i) => <p>{i}</p>) : <p>please click on some notes</p>}
            </div>
        </>
    );
} 

export default Home;