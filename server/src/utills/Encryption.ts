import bcrypt from "bcryptjs";

export class Encryption {
  private static readonly saltRounds = 10;

  /**
   * Hashes a password using bcrypt.
   * @param password - Plain text password to hash.
   * @returns A promise that resolves to the hashed password.
   */
  static async hashPassword(password: string): Promise<string> {
    const hashedPassword = await bcrypt.hash(password, this.saltRounds);
    return hashedPassword;
  }

  /**
   * Compares a plain text password with a hashed password using bcrypt.
   * @param password - Plain text password to compare.
   * @param hashedPassword - Hashed password to compare against.
   * @returns A promise that resolves to a boolean indicating whether the passwords match.
   */
  static async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
  }
}
