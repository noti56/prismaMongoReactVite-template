import jwt from "jsonwebtoken";
import { config } from "../config";

interface UserPayload {}
export class JwtUtils {
  private static tokenError = new Error("Token is invalid.");

  public static generateToken(user: UserPayload): string {
    const token = jwt.sign(user, config.secretKey, { expiresIn: "7d" }); // Token expires in 7 days
    return token;
  }

  public static verifyToken(token: string): UserPayload | null {
    try {
      return jwt.verify(token, config.secretKey) as UserPayload;
    } catch (error) {
      throw this.tokenError;
    }
  }

  public static decodeHeaderToken(authHeader: string): UserPayload {
    if (!authHeader.startsWith("Bearer ")) {
      throw this.tokenError;
    }

    try {
      return this.verifyToken(authHeader.substring(7)) as UserPayload;
    } catch (error) {
      throw this.tokenError;
    }
  }
}
