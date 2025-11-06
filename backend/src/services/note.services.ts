import { Note } from "../config/db.config.js";
import type { NoteType } from "../schemas/note.schema.js";

export async function addNewNote(newNote : NoteType){
    const note = await Note.create(newNote);
    return note;
}

export async function fetchNote(id:string){
    const note = await Note.findById(id);
    return note;
}
export async function fetchAllNotes(userId:string){
    const notes = await Note.find({userId:userId});
    return notes;
}
export async function deleteNote(id: string ,userId:string){
    const deletedNote = await Note.findOneAndDelete({_id:id,userId});
    return deletedNote;
}