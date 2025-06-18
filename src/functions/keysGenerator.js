"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keysData = void 0;
function keyGenerator() {
    //Setup
    var keys = [];
    var id = 1;
    var pitchInt = 0;
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
    //Creates key objects and fills the keys object array with key objects and their respective data
    for (var i = 0; i < 48; i++) {
        var key = {
            id: id,
            isActive: false,
            pitchInt: pitchInt,
            name: keysNames[i % 12],
            toggleActive: function () {
                this.isActive = !this.isActive;
            }
        };
        keys.push(key);
        id += 1;
        if (pitchInt === 11) {
            pitchInt = 0;
        }
        else {
            pitchInt += 1;
        }
    }
    return keys;
}
exports.keysData = keyGenerator();
console.log(exports.keysData);
