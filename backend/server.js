import express from "express";
import cors from "cors";
import "dotenv/config";
import visitsRoutes from "./routes/visits.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/visits", visitsRoutes);

// Porta e host para ambientes locais e Render
const PORT = process.env.PORT || 4000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🔥 Backend running on http://0.0.0.0:${PORT}`);
});
