//Defines Key type
interface Key {
    id: number;
    isActive: boolean;
    pitchInt: number;
    name: string;
    keyColor: string;
    toggleOff: () => void;
}

function getNumberOfOctaves() {

    let numberOfOctaves: number;
    const screenSize: number = window.innerWidth;

    if (screenSize >= 880) {
        numberOfOctaves = 4;
    } else if (screenSize < 880 && screenSize > 660) {
        numberOfOctaves = 3;
    } else {
        numberOfOctaves = 2;
    }

    return numberOfOctaves
}

function keysGenerator() {

    //Setup
    let octavesArray: Key[][] = [];
    let id: number = 1;
    const keysNames: string[] = [
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
    ]
    let blackKeys = [1, 3, 6, 8, 10];
    let numberOfOctaves = getNumberOfOctaves();
    
    //Creates key objects and fills the keys object array with key objects and their respective data
    for (let j = 0; j < numberOfOctaves; j++) {
        let octaveKeys: Key[] = []
        for (let i = 0; i < 12; i++) {
            let color: string = blackKeys.includes(i) ? 'black' : 'white';
            let pitchInt: number = i + 1;
            let key: Key = {
                id: id,
                isActive: false,
                pitchInt: pitchInt,
                name: keysNames[i % 12],
                keyColor: color,
                toggleOff() {
                    this.isActive = false;
                }
            }
            octaveKeys.push(key);
            id += 1;
        }
        octavesArray.push(octaveKeys);
    }
    return octavesArray;
}

export default keysGenerator;
