import express, { Router, type Request, type Response } from "express"
import { authCheck } from "../middlewares/auth.middleware.js";
import { noteSchema } from "../schemas/note.schema.js";
import { statusCodes } from "../config/statusCodes.enum.js";
import { addNewNote, deleteNote, fetchAllNotes, fetchNote } from "../services/note.services.js";
export const notesRouter = Router();

notesRouter.post("/" , authCheck ,async (req:Request,res: Response)=>{
    const notePayload = req.body;
    const noteToAdd = {...notePayload , userId:(req as any).userId};
    const {success} = noteSchema.safeParse(noteToAdd);
    if(!success){
        return res.status(statusCodes.bad_request).json({
            message:"Failed to add note."
        })
    }
    const note = await addNewNote(noteToAdd);
    return res.status(statusCodes.successful_request).json({
        message:"Note created successfully",
        noteId: note.id
    })
})

notesRouter.get("/" ,  authCheck , async(req: Request , res: Response)=>{
    const userId = Number((req as any).userId);
    const notes = await fetchAllNotes(userId);
    return res.status(statusCodes.successful_request).json({
        notes
    })
})

notesRouter.get("/:id" , authCheck , async(req: Request , res: Response)=>{
    const noteId = Number(req.params.id);
    const userId = Number((req as any).userId);
    const note = await fetchNote(noteId);
    if(!note || note.userId!=userId){
        return res.status(statusCodes.forbidden).json({
            message:"Invalid note ID"
        })
    }
    return res.status(statusCodes.successful_request).json({
        note
    })
})
notesRouter.delete("/:id" , authCheck , async(req: Request , res: Response)=>{
    const noteId = Number(req.params.id);
    const userId = Number((req as any).userId);
    const note = await deleteNote(noteId , userId);
    if(!note){
        return res.status(statusCodes.forbidden).json({
            message:"Invalid note ID"
        })
    }
    return res.status(statusCodes.successful_request).json({
       message:"note deleted"
    })
})