"use strict";
// import { chords } from './chordData';
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
function removeDuplicateIntervals(intervalsArray) {
    var array = intervalsArray.filter(function (number, index, array) { return array.indexOf(number) === index; });
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
function numberToInterval(array) {
    if (array.length > 2) {
        var intervalsInStrings = ['R', 'm2', 'M2', 'm3', 'M3', 'P4', 'Tri', 'P5', 'm6', 'M6', 'm7', 'M7'];
        var intervals = [];
        for (var i = 0; i < array.length; i++) {
            intervals.push(intervalsInStrings[array[i]]);
        }
        return intervals;
    }
    else {
        throw new Error('Please select at least 3 different notes');
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
function findTriad(set) {
    if (set.has(4) && set.has(7))
        return '';
    if (set.has(3) && set.has(7))
        return 'm';
    if (set.has(3) && set.has(6))
        return 'dim';
    if (set.has(4) && set.has(8))
        return 'aug';
    if (set.has(2) && set.has(7))
        return 'sus2';
    if (set.has(5) && set.has(7))
        return 'sus4';
}
;
function findSeventh(set) {
    if (set.has(10))
        return '7';
    if (set.has(11))
        return 'maj7';
}
;
function findExtensions(set) {
    var extensions = [];
    if (set.has(2))
        extensions.push('9');
    if (set.has(5))
        extensions.push('11');
    if (set.has(9))
        extensions.push('13');
    return extensions;
}
;
function findAlterations(set) {
    var alterations = [];
    if (set.has(1))
        alterations.push('b9');
    if (set.has(1) && !set.has(4))
        alterations.push('#9');
    if (set.has(6))
        alterations.push('#11');
    if (set.has(8))
        alterations.push('#5');
    if (set.has(6) && !set.has(7))
        alterations.push('b5');
    return alterations;
}
;
function findAddedNotes(set, seventh) {
    var adds = [];
    if (set.has(2) && !seventh)
        adds.push('add9');
    return adds;
}
;
function findOmissions(set, triad) {
    var omissions = [];
    if (triad && !set.has(7))
        omissions.push('omit5');
    if (triad && !set.has(3) && !set.has(4))
        omissions.push('omit3');
    return omissions;
}
;
function analyzeChord(intervals) {
    var cleanIntervals = removeDuplicateIntervals(intervals);
    var notes = new Set(cleanIntervals);
    var triad = findTriad(notes);
    var seventh = findSeventh(notes);
    var extensions = findExtensions(notes);
    var alterations = findAlterations(notes);
    var adds = findAddedNotes(notes);
    var omissions = findOmissions(notes);
    return {
        cleanIntervals: cleanIntervals,
        notes: notes,
        triad: triad,
        seventh: seventh,
        extensions: extensions,
        alterations: alterations,
        adds: adds,
        omissions: omissions
    };
}
;
function buildChordSymbol(intervals, root) {
    var analysis = analyzeChord(intervals);
    var intervalsInString = numberToInterval(analysis.cleanIntervals);
    var symbol = root;
    if (analysis.triad)
        symbol += analysis.triad;
    if (analysis.seventh)
        symbol += analysis.seventh;
    if (analysis.extensions.length) {
        symbol += "(".concat(analysis.extensions.join(', '), ")");
    }
    ;
    var modifiers = __spreadArray(__spreadArray(__spreadArray([], analysis.alterations, true), analysis.adds, true), analysis.omissions, true);
    if (modifiers.length) {
        symbol += "[".concat(modifiers.join(', '), "]");
    }
    ;
    return {
        name: symbol,
        intervals: intervalsInString
    };
}
;
exports.default = buildChordSymbol;
