//Defines Key type
interface Key {
    id: number;
    isActive: boolean;
    pitchInt: number;
    name: string;
    toggleActive: () => void;
}

function keyGenerator() {

    //Setup
    let keys: Key[] = [];
    let id: number = 1;
    let pitchInt: number = 0;
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
    
    //Creates key objects and fills the keys object array with key objects and their respective data
    for (let i = 0; i < 48; i++) {
        let key: Key = {
            id: id,
            isActive: false,
            pitchInt: pitchInt,
            name: keysNames[i % 12],
            toggleActive() {
                this.isActive = !this.isActive;
            }
        }
        keys.push(key);
        id += 1;
        if (pitchInt === 11) {
            pitchInt = 0;
        } else {
            pitchInt += 1;
        }
    }

    return keys;
}

export const keysData: Key[] = keyGenerator();
console.log(keysData)
