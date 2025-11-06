import express, { Router, type Request, type Response } from "express"
import { authCheck } from "../middlewares/auth.middleware.js";
import { noteSchema } from "../schemas/note.schema.js";
import { statusCodes } from "../config/statusCodes.enum.js";
import { addNewNote, deleteNote, fetchAllNotes, fetchNote } from "../services/note.services.js";
export const notesRouter = Router();

notesRouter.post("/" , authCheck ,async (req,res)=>{
    const notePayload = req.body;
    const {success} = noteSchema.safeParse(notePayload);
    if(!success){
        return res.status(statusCodes.bad_request).json({
            message:"Failed to add note."
        })
    }
    const note = await addNewNote({...notePayload , userId:(req as any).userId});
    return res.status(statusCodes.successful_request).json({
        message:"Note created successfully",
        noteId: note._id
    })
})

notesRouter.get("/" ,  authCheck , async(req: Request , res: Response)=>{
    const userId = (req as any).userId;
    const notes = await fetchAllNotes(userId);
    return res.status(statusCodes.successful_request).json({
        notes
    })
})

notesRouter.get("/:id" , authCheck , async(req: Request , res: Response)=>{
    const noteId = req.params.id;
    const userId = (req as any).userId;
    const note = await fetchNote(noteId as string);
    if(!note || note.userId.toString()!=userId){
        return res.status(statusCodes.forbidden).json({
            message:"Invalid note ID"
        })
    }
    return res.status(statusCodes.successful_request).json({
        note
    })
})
notesRouter.delete("/:id" , authCheck , async(req: Request , res: Response)=>{
    const noteId = req.params.id;
    const userId = (req as any).userId;
    const note = await deleteNote(noteId as string , userId);
    if(!note){
        return res.status(statusCodes.forbidden).json({
            message:"Invalid note ID"
        })
    }
    return res.status(statusCodes.successful_request).json({
       message:"note deleted"
    })
})