//Defines Key type
interface Key {
    id: number;
    isActive: boolean;
    pitchInt: number;
    name: string;
    keyColor: string;
    toggleOff: () => void;
}

function keysGenerator() {

    //Setup
    let keys: [Key[], Key[], Key[], Key[]] = [[], [], [], []];
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
    
    //Creates key objects and fills the keys object array with key objects and their respective data
    for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 12; i++) {
            let color: string = blackKeys.includes(i) ? 'black' : 'white';
            let pitchInt: number = i;
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
            keys[j].push(key);
            id += 1;
        }
    }
    return keys;
}

export default keysGenerator;
