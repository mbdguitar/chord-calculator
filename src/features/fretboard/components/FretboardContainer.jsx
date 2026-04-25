import { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import getIntervals from '../functions/getIntervals';
import Fretboard from '../components/Fretboard/Fretboard';
import RootNoteInput from '../components/RootNoteInput';
import ErrorMessage from '../components/ui/ErrorMessage';
import CalculateButton from '../components/ui/CalculateButton';
import ChordDisplay from '../components/ui/ChordDisplay';
import styles from '../modules/FretboardContainer.module.css';
import postChord from '../api/postChord';

function FretboardContainer() {
    const [notes, setNotes] = useState([]);
    const [root, setRoot] = useState('');
    const [chord, setChord] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

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
            className={styles.fretboard_container}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ transition: 0.1 }}
        >
            <ChordDisplay chord={chord} />
            <Fretboard sendNotes={sendNotes} />
            {errorMessage !== '' ? <ErrorMessage errorMessage={errorMessage} removeErrorMessage={removeErrorMessage} /> : ''}
            <RootNoteInput notes={notes} getRoot={getRoot} />
            <CalculateButton updateChord={updateChord} />
        </motion.div>
    );
}

export default FretboardContainer;