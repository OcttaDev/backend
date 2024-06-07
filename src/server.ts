import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import clientRoutes from "./routes/clientRoutes";

dotenv.config();

const server = express();

server.use(express.json());

server.use(cors());

server.use(cors());
server.set("trust proxy", true);

server.use("/client", clientRoutes);
server.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
