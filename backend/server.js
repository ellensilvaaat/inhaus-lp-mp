import express from "express";
import cors from "cors";
import "dotenv/config";
import visitsRoutes from "./routes/visits.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/visits", visitsRoutes);

app.listen(4000, "127.0.0.1", () => {
  console.log("🔥 Backend running on http://127.0.0.1:4000");
});
