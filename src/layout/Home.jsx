import { useState } from 'react';
import KeyboardContainer from '../features/keyboard/components/KeyboardContainer';
import FretboardContainer from '../containers/FretboardContainer';
import InstrumentMenu from '../ui/InstrumentMenu';

function Home() {
    const [activeInstrument, setActiveInstrument] = useState('Piano');

    const instrumentComponents = {
        Piano: <KeyboardContainer />,
        Guitar: <FretboardContainer />
    }

    function handleInstrumentMenuButton(e) {
        let instrumentName = e.target.name;
        setActiveInstrument(instrumentName);
    }

    return (
        <>
            <InstrumentMenu handleInstrumentMenuButton={handleInstrumentMenuButton} />
            {instrumentComponents[activeInstrument] || <div>Select an instrument</div>}
        </>
    );
}

export default Home