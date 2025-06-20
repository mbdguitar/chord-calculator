import React, { useState } from 'react';
import Keyboard from './Keyboard'
import RootForm from './RootForm'

function Home() {
    const [ keys, setKeys ] = useState([]) 
    const [ root, setRoot ] = useState('')

    function sendKeys(array) {
        setKeys(array);
    }

    function getRoot({ target }) {
        setRoot(target.value)
    }

    return (
        <>
            <Keyboard sendKeys={sendKeys}/>
            <RootForm getRoot={getRoot} keys={keys}/>
        </>
    );
} 

export default Home;