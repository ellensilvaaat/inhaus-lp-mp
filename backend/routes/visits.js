import express from "express";
import supabase from "../supabase.js";

const router = express.Router();

router.get("/booked", async (req, res) => {
  const { date } = req.query;

  const { data, error } = await supabase
    .from("visits_mp")
    .select("visit_time")
    .eq("visit_day", date);

  if (error) return res.status(500).json({ error });

  res.json({ bookedTimes: data.map(d => d.visit_time) });
});

router.post("/", async (req, res) => {
  const { full_name, mobile, email, service, visit_day, visit_time } = req.body;

  const { error } = await supabase.from("visits").insert([{
    full_name,
    mobile,
    email,
    service,
    visit_day,
    visit_time,
  }]);

  if (error) return res.status(500).json({ error });

  res.json({ message: "saved" });
});

export default router;





