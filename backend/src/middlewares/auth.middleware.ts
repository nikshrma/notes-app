import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload, type Secret } from "jsonwebtoken";
import { statusCodes } from "../config/statusCodes.enum.js";

export function authCheck(req: Request,res : Response,next: NextFunction){
   const auth = req.headers.authorization;
  if (!auth) {
    return res.status(401).json({ message: "No authorization header" });
  }

  const token = auth.split(" ")[1];
  try{
    const decoded = jwt.verify(token as string, process.env.jwtPass as Secret);

    if (typeof decoded === "string" || !("userId" in decoded)) {
      return res.status(statusCodes.bad_request).json({ message: "Invalid token format" });
    }

    (req as any).userId = (decoded as JwtPayload).userId;
    next();
  }  catch {
    return res.status(statusCodes.bad_request).json({ message: "Invalid or expired token" });
  }
}