interface note {
    id: number;
    isActive: boolean;
    pitchInt: number;
    name: string;
    keyColor: string;
    toggleOff: () => void;
}

function getIntervals(notesArray: note[], rootInput: string) {

    if (notesArray && rootInput) {
        const notes: note[] = notesArray; 
        const root: any = notes.find((note) => note.name === rootInput);
        const notesPitchInts: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const rootIndex = notesPitchInts.indexOf(root.pitchInt);
        let intervalsArray: number[] = [];

        const intervals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

        //counter represents distance between pitchInts, not index
        let counter = 0;

        for (let i = rootIndex; i < notesPitchInts.length + rootIndex; i++) {
            notes.forEach((n) => {
                if (n.pitchInt === notesPitchInts[i % 12]) {
                    intervalsArray.push(intervals[counter]);
                }
            })
            counter += 1;
        }
        return intervalsArray;
    }
        return [];
}

export default getIntervals;