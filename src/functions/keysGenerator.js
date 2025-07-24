Object.defineProperty(exports, "__esModule", { value: true });
function getNumberOfOctaves() {
    var numberOfOctaves;
    var screenSize = window.innerWidth;
    if (screenSize >= 990) {
        numberOfOctaves = 3;
    }
    else if (screenSize < 990 && screenSize > 550) {
        numberOfOctaves = 2;
    }
    else {
        numberOfOctaves = 1;
    }
    return numberOfOctaves;
}
function keysGenerator() {
    //Setup
    var octavesArray = [];
    var id = 1;
    var keysNames = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];
    var blackKeys = [1, 3, 6, 8, 10];
    var numberOfOctaves = getNumberOfOctaves();
    //Creates key objects and fills the keys object array with key objects and their respective data
    for (var j = 0; j < numberOfOctaves; j++) {
        var octaveKeys = [];
        for (var i = 0; i < 12; i++) {
            var color = blackKeys.includes(i) ? 'black' : 'white';
            var pitchInt = i + 1;
            var key = {
                id: id,
                isActive: false,
                pitchInt: pitchInt,
                name: keysNames[i % 12],
                keyColor: color
            };
            octaveKeys.push(key);
            id += 1;
        }
        octavesArray.push(octaveKeys);
    }
    return octavesArray;
}
exports.default = keysGenerator;
