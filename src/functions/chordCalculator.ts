// import { chords } from './chordData';

function removeDuplicateIntervals(intervalsArray: number[]) {
    const array = intervalsArray.filter((number, index, array) => array.indexOf(number) === index);
    return array;
}

// function findChord(intervalsArray: number[]) {
//     for (let i = 0; i < chords.length; i++) {
//         if ((intervalsArray.toString()) === chords[i][1].toString()) {
//             return chords[i][0];
//         }
//     }
//     throw new Error('Chord could not be found, please try another chord');
// }

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

// function chordCalculator(intervalsArray: number[], root: string) {
//     try {
//         if (root) {
//             const chordToFind = removeDuplicateIntervals(intervalsArray);
//             const intervalsInString = numberToInterval(chordToFind);
//             let chordName = `${root}${findChord(chordToFind)}`;
//             const chord = {
//                 name: chordName,
//                 intervals: intervalsInString
//             };
//             return chord;
//         } else {
//             throw new Error('Please select a root from the options below');
//         }
//     } catch (error) {
//         return error.message
//     }
// }

function findTriad(set: Set<number>) {
    if (set.has(4) && set.has(7)) return '';
    if (set.has(3) && set.has(7)) return 'm';
    if (set.has(3) && set.has(6)) return 'dim';
    if (set.has(4) && set.has(8)) return 'aug';
    if (set.has(2) && set.has(7)) return 'sus2';
    if (set.has(5) && set.has(7)) return 'sus4';
};

function findSeventh(set: Set<number>) {
    if (set.has(10)) return '7'
    if (set.has(11)) return 'maj7'
};

function findExtensions(set: Set<number>, seventh?: string): string[] {
    const extensions: string[] = [];
    if (set.has(2) && seventh) extensions.push('9');
    if (set.has(5) && seventh) extensions.push('11');
    if (set.has(9) && seventh) extensions.push('13');
    return extensions
};

function findAlterations(set: Set<number>): string[] {
    const alterations: string[] = [];
    if (set.has(1)) alterations.push('b9');
    if (set.has(1) && !set.has(4)) alterations.push('#9');
    if (set.has(6)) alterations.push('#11');
    if (set.has(8)) alterations.push('#5');
    if (set.has(6) && !set.has(7)) alterations.push('b5');
    return alterations;
};

function findAddedNotes(set: Set<number>, seventh?: string): string[] {
    const adds: string[] = [];
    if (set.has(2) && !seventh) adds.push('add9')
    return adds;
};

function findOmissions(set: Set<number>, triad?: string) {
    const omissions: string[] = [];
    if (triad && !set.has(7)) omissions.push('omit5');
    if (triad && !set.has(3) && !set.has(4)) omissions.push('omit3');
    return omissions;
};

function analyzeChord(intervals: number[]) {
    const cleanIntervals = removeDuplicateIntervals(intervals)
    const notes = new Set(cleanIntervals)
    const triad = findTriad(notes);
    const seventh = findSeventh(notes);
    const extensions = findExtensions(notes);
    const alterations = findAlterations(notes);
    const adds = findAddedNotes(notes);
    const omissions = findOmissions(notes);

    return {
        cleanIntervals,
        notes,
        triad,
        seventh,
        extensions,
        alterations,
        adds,
        omissions
    };
};

function buildChordSymbol(intervals: number[], root: string) {
    let analysis = analyzeChord(intervals);
    let intervalsInString = numberToInterval(analysis.cleanIntervals);
    let symbol: string = root;

    if (analysis.triad) symbol += analysis.triad;
    if (analysis.seventh) symbol += analysis.seventh;
    if (analysis.extensions.length) {
        symbol += `(${analysis.extensions.join(', ')})`
    };

    const modifiers = [...analysis.alterations, ...analysis.adds, ...analysis.omissions];
    if (modifiers.length) {
        symbol += `[${modifiers.join(', ')}]`
    };

    return {
        name: symbol,
        intervals: intervalsInString
    };
};

export default buildChordSymbol;