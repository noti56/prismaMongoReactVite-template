declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production";
    jwtToken: string;
    PORT: string;
  }
}
