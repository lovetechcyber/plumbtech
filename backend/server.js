import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/plumbtech");

// MODEL
const MediaSchema = new mongoose.Schema({
  title: String,
  category: String,
  type: String,
  url: String,
});

const Media = mongoose.model("Media", MediaSchema);

// FILE STORAGE
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

// GET ALL MEDIA
app.get("/api/media", async (req, res) => {
  const data = await Media.find();
  res.json(data);
});

// UPLOAD MEDIA
app.post("/api/media/upload", upload.single("file"), async (req, res) => {
  const fileType = req.file.mimetype.startsWith("video")
    ? "video"
    : "image";

  const newMedia = new Media({
    title: req.body.title,
    category: req.body.category,
    type: fileType,
    url: `http://localhost:5000/uploads/${req.file.filename}`,
  });

  await newMedia.save();
  res.json(newMedia);
});

// DELETE MEDIA
app.delete("/api/media/:id", async (req, res) => {
  await Media.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

// STATIC FILES
app.use("/uploads", express.static("uploads"));

app.listen(5000, () => console.log("Server running on port 5000"));