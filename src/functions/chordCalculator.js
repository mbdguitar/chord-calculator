Object.defineProperty(exports, "__esModule", { value: true });
var chordData_1 = require("./chordData");
function removeDuplicateIntervals(intervalsArray) {
    var array = intervalsArray.filter(function (number, index, array) { return array.indexOf(number) === index; });
    return array;
}
function findChord(intervalsArray) {
    for (var i = 0; i < chordData_1.chords.length; i++) {
        if ((intervalsArray.toString()) === chordData_1.chords[i][1].toString()) {
            return chordData_1.chords[i][0];
        }
    }
    throw new Error('Chord could not be found, please try another chord');
}
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
        throw new Error('Please select at least 3 notes');
    }
}
function chordCalculator(intervalsArray, root) {
    try {
        if (root) {
            var chordToFind = removeDuplicateIntervals(intervalsArray);
            var intervalsInString = numberToInterval(chordToFind);
            var chordName = "".concat(root).concat(findChord(chordToFind));
            var chord = {
                name: chordName,
                intervals: intervalsInString
            };
            return chord;
        }
        else {
            throw new Error('Please select a root from the dropdown');
        }
    }
    catch (error) {
        return error.message;
    }
}
exports.default = chordCalculator;
