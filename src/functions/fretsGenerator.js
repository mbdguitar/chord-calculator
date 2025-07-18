Object.defineProperty(exports, "__esModule", { value: true });
function getNumberOfFrets() {
    var numberOfFrets;
    var screenSize = window.innerWidth;
    if (screenSize >= 880) {
        numberOfFrets = 16;
    }
    else if (screenSize < 880 && screenSize > 660) {
        numberOfFrets = 12;
    }
    else {
        numberOfFrets = 8;
    }
    return numberOfFrets;
}
function fretsGenerator(tuning, stringNumber) {
    var fretboardLength = getNumberOfFrets();
    var fretArray = [];
    var id = ((fretboardLength * stringNumber) + (stringNumber * 1)) - fretboardLength;
    var fretNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
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
