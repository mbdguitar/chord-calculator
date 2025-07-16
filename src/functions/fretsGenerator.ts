interface Fret {
    id: number;
    isActive: boolean;
    fretNumber: number;
    pitchInt: number;
    name: string;
}

function fretsGenerator(tuning: string) {
    let fretboardLength: number = 12;
    let fretArray: Fret[] = [];
    let id: number = 1;
    const fretNotes: string[] = ['C', 'C# / Db', 'D', 'D# / Eb', 'E', 'F', 'F# / Gb', 'G', 'G# / Ab', 'A', 'A# / Bb', 'B'];
    const firstNoteIndex = fretNotes.indexOf(tuning);

    for (let i = 0; i < fretboardLength + 1; i++) {
        const currentFretIndex = (firstNoteIndex + i) % 12;
        const fret: Fret = {
            id: id,
            isActive: false,
            fretNumber: i,
            pitchInt: currentFretIndex,
            name: fretNotes[currentFretIndex]
        }
        fretArray.push(fret);
        id += 1;
    }
    return fretArray;
}

export default fretsGenerator;