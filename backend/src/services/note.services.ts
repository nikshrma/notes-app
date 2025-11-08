import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();
import type { NoteType } from "../schemas/note.schema.js";

export async function addNewNote(noteToBeAdded : NoteType){
    const note = await prisma.note.create({
        data:{
            title:noteToBeAdded.title,
            description:noteToBeAdded.description,
            userId:noteToBeAdded.userId
        }
    })
    return note;
}

export async function fetchNote(id:number){
   const note=await prisma.note.findUnique({
    where:{
        id:id
    }
   });
    return note;
}
export async function fetchAllNotes(userId:number){
    const notes = await prisma.note.findMany({
        where:{
            userId
        }
    });
    return notes;
}
export async function deleteNote(id: number ,userId:number){
    const deletedNote = await prisma.note.deleteMany({
        where:{
            id,
            userId
        }
    });
    return deletedNote;
}