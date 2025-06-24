import { noteSorter, note } from './noteSorter'

function getIntervals(notesArray: note[], rootInput: string) {

    if (notesArray && rootInput) {
        const notes: note[] = noteSorter(notesArray); 
        const root: any = notes.find((note) => note.name === rootInput);
        const notesPitchInts: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const rootIndex = notesPitchInts.indexOf(root.pitchInt);
        console.log(`Root Index: ${rootIndex}`);
        let intervalsArray: string[] = [];

        const intervals = [
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
        ]

        //counter represents distance between pitchInts, not index
        let counter = 0;

        for (let i = rootIndex; i < notesPitchInts.length + rootIndex; i++) {
            notes.forEach((n) => {
                if (n.pitchInt === notesPitchInts[i % 12]) {
                    intervalsArray.push(intervals[counter][0]);
                }
            })
            counter += 1;
            console.log(counter);
        }
        return intervalsArray;
    }
}

export default getIntervals;


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