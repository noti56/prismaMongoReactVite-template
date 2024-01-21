import { Request, Response, NextFunction } from "express";
import { JwtUtils } from "../utills/jwt";
// import { Context } from "../utills/context";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authHeader.substring(7); // Remove "Bearer " from the token string

  try {
    const userPayload = JwtUtils.verifyToken(token);
    // req.context = new Context(userPayload);
    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};
