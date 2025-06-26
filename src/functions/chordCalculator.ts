import { chords } from './chordData';

function doesChordMatch(intervalsArray: number[], dataArray) {
    return intervalsArray.every((i) => dataArray.includes(i))
}

function findChord(intervalsArray: number[]) {
    for (let i = 0; i < chords.length; i++) {
        if (doesChordMatch(intervalsArray, chords[i][1])) {
            return chords[i][0];
        }
    }
    throw new Error('Error: Chord could not be calculated');
}

function chordCalculator(intervalsArray: number[], root: string) {
    let chordName = `${root}${findChord(intervalsArray)}`;
    const chord = {
        name: chordName,
        intervals: intervalsArray
    };
    return chord
}

export default chordCalculator;