export interface Note {
    id: number;
    isActive: boolean;
    pitchInt: number;
    name: string;
    fretNumber?: number,
    keyColor?: string;
}

export function noteSorter(notes: Note[]) {
    return notes.sort((a, b) => a.id - b.id)
};