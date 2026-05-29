import express from "express";
import Quote from "../models/Quote.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// CREATE QUOTE
router.post(
  "/",
  upload.single("media"),
  async (req, res) => {
    try {
      const {
        name,
        phone,
        location,
        issueType,
        description,
      } = req.body;

      // VALIDATION
      if (
        !name ||
        !phone ||
        !location ||
        !issueType ||
        !description
      ) {
        return res.status(400).json({
          error: "All fields are required",
        });
      }

      const quote = await Quote.create({
        name,
        phone,
        location,
        issueType,
        description,

        media: req.file
          ? `/uploads/${req.file.filename}`
          : null,
      });

      console.log(
        "📩 New quote request received"
      );

      res.status(201).json({
        success: true,
        quote,
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }
);

// GET ALL QUOTES
router.get("/", async (req, res) => {
  try {
    const quotes = await Quote.find().sort({
      createdAt: -1,
    });

    res.json(quotes);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// DELETE QUOTE
router.delete("/:id", async (req, res) => {
  try {
    await Quote.findByIdAndDelete(
      req.params.id
    );

    res.json({
      success: true,
      message: "Quote deleted",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

export default router;