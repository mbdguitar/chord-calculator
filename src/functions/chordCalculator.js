"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chordData_1 = require("./chordData");
function doesChordMatch(intervalsArray, dataArray) {
    return intervalsArray.every(function (i) { return dataArray.includes(i); });
}
function findChord(intervalsArray) {
    for (var i = 0; i < chordData_1.chords.length; i++) {
        if (doesChordMatch(intervalsArray, chordData_1.chords[i][1])) {
            return chordData_1.chords[i][0];
        }
    }
    throw new Error('Error: Chord could not be calculated');
}
function chordCalculator(intervalsArray, root) {
    var chordName = "".concat(root).concat(findChord(intervalsArray));
    var chord = {
        name: chordName,
        intervals: intervalsArray
    };
    return chord;
}
exports.default = chordCalculator;
