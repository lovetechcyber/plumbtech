import express from "express";
import Media from "../models/Media.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// GET MEDIA
router.get("/", async (req, res) => {
  try {
    const media = await Media.find().sort({
      createdAt: -1,
    });

    res.json(media);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// UPLOAD MEDIA
router.post(
  "/upload",
  upload.single("file"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          error: "No file uploaded",
        });
      }

      const fileType =
        req.file.mimetype.startsWith("video")
          ? "video"
          : "image";

      const media = await Media.create({
        title: req.body.title,
        category: req.body.category,
        type: fileType,

        url: `/uploads/${req.file.filename}`,
      });

      res.status(201).json(media);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }
);

// DELETE MEDIA
router.delete("/:id", async (req, res) => {
  try {
    await Media.findByIdAndDelete(
      req.params.id
    );

    res.json({
      success: true,
      message: "Media deleted",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

export default router;