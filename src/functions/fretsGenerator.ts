interface Fret {
    id: number;
    isActive: boolean;
    fretNumber: number;
    pitchInt: number;
    name: string;
}

function getNumberOfFrets() {
    let numberOfFrets: number;
    const screenSize: number = window.innerWidth;

    if (screenSize >= 880) {
        numberOfFrets = 16;
    } else if (screenSize < 880 && screenSize > 660) {
        numberOfFrets = 12;
    } else {
        numberOfFrets = 8;
    }

    return numberOfFrets
}

function fretsGenerator(tuning: string, stringNumber: number) {
    let fretboardLength: number = getNumberOfFrets();
    let fretArray: Fret[] = [];
    let id: number = ((fretboardLength * stringNumber) + (stringNumber * 1)) - fretboardLength;
    const fretNotes: string[] = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const firstNoteIndex = fretNotes.indexOf(tuning);

    for (let i = 0; i < fretboardLength + 1; i++) {
        const currentFretIndex = (firstNoteIndex + i) % 12;
        const fret: Fret = {
            id: id,
            isActive: false,
            pitchInt: currentFretIndex + 1,
            name: fretNotes[currentFretIndex],
            fretNumber: i
        };
        fretArray.push(fret);
        id += 1;
    }
    return fretArray;
}

export default fretsGenerator;