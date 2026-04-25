import { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import getIntervals from '../../../lib/getIntervals';
import Keyboard from '../components/Keyboard/Keyboard';
import RootNoteInput from '../../rootMenu/components/RootNoteInput';
import ErrorMessage from '../../../ui/ErrorMessage';
import CalculateButton from '../../../ui/CalculateButton';
import ChordDisplay from '../../../ui/ChordDisplay';
import styles from '../modules/KeyboardContainer.module.css';
import postChord from '../../../api/postChord';

function KeyboardContainer() {
    const [notes, setNotes] = useState([]);
    const [root, setRoot] = useState('');
    const [chord, setChord] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        removeErrorMessage();
    }, [notes, root, chord]);

    useEffect(() => {
        if (!notes.some((note) => note.name === root)) {
            setRoot('');
        }
    }, [notes, root]);

    const sendNotes = useCallback((array) => {
        setNotes(array);
    }, [])


    function getRoot(root) {
        setRoot(root);
    }

    function removeErrorMessage() {
        setErrorMessage('')
    }

    async function updateChord() {
        try {
            let result = await postChord({ root: root, intervals: getIntervals(notes, root) });
            setChord(result.chord);
        } catch (err) {
            console.log(err);
        };
    };

    return (
        <motion.div
            className={styles.keyboard_container}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ transition: 0.1 }}
        >
            <ChordDisplay chord={chord} />
            <Keyboard sendNotes={sendNotes} />
            {errorMessage !== '' ? <ErrorMessage errorMessage={errorMessage} removeErrorMessage={removeErrorMessage} /> : ''}
            <RootNoteInput notes={notes} getRoot={getRoot} />
            <CalculateButton updateChord={updateChord} />
        </motion.div>
    );
}

export default KeyboardContainer;