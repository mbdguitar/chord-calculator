"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var noteSorter_1 = require("./noteSorter");
function getIntervals(notesArray, rootInput) {
    if (notesArray && rootInput) {
        var notes = (0, noteSorter_1.noteSorter)(notesArray);
        var root = notes.find(function (note) { return note.name === rootInput; });
        var notesPitchInts_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var rootIndex = notesPitchInts_1.indexOf(root.pitchInt);
        console.log("Root Index: ".concat(rootIndex));
        var intervalsArray_1 = [];
        var intervals_1 = [
            ['R'],
            ['m2'],
            ['M2'],
            ['m3'],
            ['M3'],
            ['P4'],
            ['Tri'],
            ['P5'],
            ['m6'],
            ['M6'],
            ['m7'],
            ['M7']
        ];
        //counter represents distance between pitchInts, not index
        var counter_1 = 0;
        var _loop_1 = function (i) {
            notes.forEach(function (n) {
                if (n.pitchInt === notesPitchInts_1[i % 12]) {
                    intervalsArray_1.push(intervals_1[counter_1][0]);
                }
            });
            counter_1 += 1;
            console.log(counter_1);
        };
        for (var i = rootIndex; i < notesPitchInts_1.length + rootIndex; i++) {
            _loop_1(i);
        }
        return intervalsArray_1;
    }
}
exports.default = getIntervals;
//Code for testing
/*
console.log(getIntervals(
    [
        {
            id: 3,
            isActive: true,
            pitchInt: 3,
            name: 'D',
            keyColor: 'white',
            toggleOff() {
                this.isActive = !this.isActive
            }
        },
        {
            id: 7,
            isActive: true,
            pitchInt: 7,
            name: 'F# / Gb',
            keyColor: 'black',
            toggleOff() {
                this.isActive = !this.isActive
            }
        },
        {
            id: 10,
            isActive: true,
            pitchInt: 10,
            name: 'A',
            keyColor: 'white',
            toggleOff() {
                this.isActive = !this.isActive
            }
        },
        {
            id: 13,
            isActive: true,
            pitchInt: 1,
            name: 'C',
            keyColor: 'white',
            toggleOff() {
                this.isActive = !this.isActive
            }
        },
    ],
    'D'
))
*/ 
