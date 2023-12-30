import { config as dotenvConfig } from "dotenv";

dotenvConfig();

export const config = {
  secretKey: process.env.jwtToken ?? "",
  nodeEnv: process.env.NODE_ENV ?? "",
  port: process.env.PORT ?? 3000,
} as const;
