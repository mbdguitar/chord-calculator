import { chords } from './chordData';

function removeDuplicateIntervals(intervalsArray: number[]) {
    const array = intervalsArray.filter((number, index, array) =>  array.indexOf(number) === index);
    return array;
}

function findChord(intervalsArray: number[]) {
    for (let i = 0; i < chords.length; i++) {
        if ((intervalsArray.toString()) === chords[i][1].toString()) {
            return chords[i][0];
        }
    }
    throw new Error('Chord could not be found, please try another chord');
}

function numberToInterval(array: number[]) {
    if (array.length > 2) {
        let intervalsInStrings: any = ['R', 'm2', 'M2', 'm3', 'M3', 'P4', 'Tri', 'P5', 'm6', 'M6', 'm7', 'M7'];
        let intervals: string[] = []
        for (let i = 0; i < array.length; i++) {
            intervals.push(intervalsInStrings[array[i]])
        }   
        return intervals;
    } else {
        throw new Error('Please select at least 3 different notes')
    }
}

function chordCalculator(intervalsArray: number[], root: string) {
    try {
        if (root) {
            const chordToFind = removeDuplicateIntervals(intervalsArray);
            const intervalsInString = numberToInterval(chordToFind);
            let chordName = `${root}${findChord(chordToFind)}`;
            const chord = {
                name: chordName,
                intervals: intervalsInString
            };
        return chord;
        } else {
            throw new Error('Please select a root from the options below');
        }
    } catch(error) {
        return error.message
    }
}

export default chordCalculator;

