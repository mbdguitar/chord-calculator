export interface note {
    id: number;
    isActive: boolean;
    pitchInt: number;
    name: string;
    keyColor: string;
    toggleOff: () => void;
}

export function noteSorter(notes: note[]) {
    return notes.sort((a, b) => a.id - b.id)
};