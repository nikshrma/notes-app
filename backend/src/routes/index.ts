import express, { Router } from "express"
import { userRouter } from "./notes.js";
import { notesRouter } from "./users.js";
export const rootRouter = Router();

rootRouter.use("/users" ,userRouter );
rootRouter.use("/notes" ,notesRouter );
