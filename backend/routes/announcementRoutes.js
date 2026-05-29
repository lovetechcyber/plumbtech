import express from "express";
import Announcement from "../models//Anouncement.js";

const router = express.Router();

// GET ANNOUNCEMENT
router.get("/", async (req, res) => {
  try {
    const announcement =
      await Announcement.findOne();

    res.json(
      announcement || {
        message: "",
      }
    );
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// CREATE OR UPDATE
router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "Message required",
      });
    }

    let announcement =
      await Announcement.findOne();

    if (announcement) {
      announcement.message = message;
      await announcement.save();
    } else {
      announcement =
        await Announcement.create({
          message,
        });
    }

    res.json(announcement);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

export default router;