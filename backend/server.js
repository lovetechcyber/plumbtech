import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import adminAuthRoutes from "./routes/adminAuth.js";
import quoteRoutes from "./routes/quoteRoutes.js";
import mediaRoutes from "./routes/mediaRoutes.js";
import announcementRoutes from "./routes/announcementRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";


dotenv.config();

const app = express();

// MIDDLEWARE
app.use(
  cors({
    origin: "https://plumbtech.onrender.com",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

// STATIC FILES
app.use(
  "/uploads",
  express.static("uploads")
);

// ROUTES
app.use("/api/quotes", quoteRoutes);

app.use("/api/media", mediaRoutes);

app.use(
  "/api/announcement",
  announcementRoutes
);

app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminAuthRoutes);

/* FIX __dirname */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* FRONTEND PATH */
const frontendPath = path.join(
  __dirname,
  "../frontend/dist"
);

/* STATIC FILES */
app.use(express.static(frontendPath));

/* REACT ROUTER FIX */
app.get("*", (req, res) => {
  res.sendFile(
    path.join(frontendPath, "index.html")
  );
});


// DATABASE
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(
      process.env.PORT || 5000,
      () => {
        console.log("Server running");
      }
    );
  })
  .catch((err) =>
    console.log(err)
  );