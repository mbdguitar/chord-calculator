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
    else if (screenSize < 660 && screenSize > 440) {
        numberOfFrets = 8;
    }
    else {
        numberOfFrets = 6;
    }
    return numberOfFrets;
}
function fretsGenerator(tuning, stringNumber) {
    var fretboardLength = getNumberOfFrets();
    var fretArray = [];
    var id = ((6 - stringNumber) * fretboardLength) + 1;
    var fretNotes = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];
    var firstNoteIndex = fretNotes.indexOf(tuning);
    for (var i = 0; i < fretboardLength; i++) {
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
