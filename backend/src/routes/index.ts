import express, { Router } from "express"
import { usersRouter } from "./users.js";
import { notesRouter } from "./notes.js";

export const rootRouter = Router();

rootRouter.use("/users" ,usersRouter );
rootRouter.use("/notes" ,notesRouter);
