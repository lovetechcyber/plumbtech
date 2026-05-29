import express from "express";
import multer from "multer";
import Quote from "../models/Quote.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/quotes", upload.single("media"), async (req, res) => {
  try {
    const quote = new Quote({
      name: req.body.name,
      phone: req.body.phone,
      location: req.body.location,
      issueType: req.body.issueType,
      description: req.body.description,
      media: req.file ? req.file.path : null,
    });

    await quote.save();

    // 🔔 SMS ALERT (placeholder for Phase 5)
    console.log("Send SMS to admin: New quote request received");

    res.status(200).json({ message: "Quote submitted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;