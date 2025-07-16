Object.defineProperty(exports, "__esModule", { value: true });
function fretsGenerator(tuning, stringNumber) {
    var fretboardLength = 12;
    var fretArray = [];
    var id = ((fretboardLength * stringNumber) + (stringNumber * 1)) - fretboardLength;
    var fretNotes = ['C', 'C# / Db', 'D', 'D# / Eb', 'E', 'F', 'F# / Gb', 'G', 'G# / Ab', 'A', 'A# / Bb', 'B'];
    var firstNoteIndex = fretNotes.indexOf(tuning);
    for (var i = 0; i < fretboardLength + 1; i++) {
        var currentFretIndex = (firstNoteIndex + i) % 12;
        var fret = {
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
exports.default = fretsGenerator;
