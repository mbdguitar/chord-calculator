Object.defineProperty(exports, "__esModule", { value: true });
function getIntervals(notesArray, rootInput) {
    if (notesArray && rootInput) {
        var notes = notesArray;
        var root = notes.find(function (note) { return note.name === rootInput; });
        var notesPitchInts_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var rootIndex = notesPitchInts_1.indexOf(root.pitchInt);
        var intervalsArray_1 = [];
        var intervals_1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        //counter represents distance between pitchInts, not index
        var counter_1 = 0;
        var _loop_1 = function (i) {
            notes.forEach(function (n) {
                if (n.pitchInt === notesPitchInts_1[i % 12]) {
                    intervalsArray_1.push(intervals_1[counter_1]);
                }
            });
            counter_1 += 1;
        };
        for (var i = rootIndex; i < notesPitchInts_1.length + rootIndex; i++) {
            _loop_1(i);
        }
        return intervalsArray_1;
    }
    return [];
}
exports.default = getIntervals;
