"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function keysGenerator() {
    //Setup
    var keys = [[], [], [], []];
    var id = 1;
    var keysNames = [
        'C',
        'C# / Db',
        'D',
        'D# / Eb',
        'E',
        'F',
        'F# / Gb',
        'G',
        'G# / Ab',
        'A',
        'A# / Bb',
        'B'
    ];
    var blackKeys = [1, 3, 6, 8, 10];
    //Creates key objects and fills the keys object array with key objects and their respective data
    for (var j = 0; j < 4; j++) {
        for (var i = 0; i < 12; i++) {
            var color = blackKeys.includes(i) ? 'black' : 'white';
            var pitchInt = i + 1;
            var key = {
                id: id,
                isActive: false,
                pitchInt: pitchInt,
                name: keysNames[i % 12],
                keyColor: color,
                toggleOff: function () {
                    this.isActive = false;
                }
            };
            keys[j].push(key);
            id += 1;
        }
    }
    return keys;
}
exports.default = keysGenerator;
