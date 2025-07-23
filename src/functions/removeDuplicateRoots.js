"use strict";
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
function removeDuplicateRoots(notes) {
    var newNotes = __spreadArray([], notes, true);
    newNotes.forEach(function (note) {
        for (var i = 0; i < newNotes.length; i++) {
            if (note.name === newNotes[i].name && note.id !== newNotes[i].id) {
                newNotes.splice(i, 1);
            }
        }
    });
    return newNotes;
}
exports.default = removeDuplicateRoots;
