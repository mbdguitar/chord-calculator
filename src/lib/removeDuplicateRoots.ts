import { Note } from "./noteSorter";

function removeDuplicateRoots(notes: Note[]) {
    let newNotes: Note[] = [ ...notes];
    newNotes.forEach((note) => {
        for (let i = 0; i < newNotes.length; i++) {
            if (note.name === newNotes[i].name && note.id !== newNotes[i].id) {
                newNotes.splice(i, 1);
            } 
        }
    });
    return newNotes;
}

export default removeDuplicateRoots;