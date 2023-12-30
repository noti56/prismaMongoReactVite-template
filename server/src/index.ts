import express, { json } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
export const prismaDb = new PrismaClient();
prismaDb.$connect().then((res) => {
  console.log("🔵 db connected");
});

const port = process.env.PORT ?? 3000;
const app = express();

app.use(json());
app.use(cors());

app.get("/api", (req, res) => {
  res.send("<h1>Api is Connected and running</h1>");
});

app.listen(port, () => {
  return console.log(`🟢 Express is listening at http://localhost:${port}`);
});
