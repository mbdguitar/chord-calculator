Object.defineProperty(exports, "__esModule", { value: true });
exports.noteSorter = noteSorter;
function noteSorter(notes) {
    return notes.sort(function (a, b) { return a.id - b.id; });
}
;
