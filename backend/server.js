import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";

// ROUTES
import adminAuthRoutes from "./routes/adminAuth.js";
import quoteRoutes from "./routes/quoteRoutes.js";
import mediaRoutes from "./routes/mediaRoutes.js";
import announcementRoutes from "./routes/announcementRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

/* FIX __dirname */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* FRONTEND BUILD PATH */
const frontendPath = path.join(
  __dirname,
  "../frontend/dist"
);

/* MIDDLEWARE */
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://plumbtech.netlify.app",
      "https://plumbtechserver.onrender.com",
    ],
    credentials: true,
    methods: [
      "GET",
      "POST",
      "PUT",
      "DELETE",
      "OPTIONS",
    ],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
    ],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* LOGGING */
app.use(morgan("dev"));

/* STATIC UPLOADS */
app.use(
  "/uploads",
  express.static(
    path.join(__dirname, "uploads")
  )
);

/* API ROUTES */
app.use("/api/admin", adminAuthRoutes);

app.use("/api/quotes", quoteRoutes);

app.use("/api/media", mediaRoutes);

app.use(
  "/api/announcement",
  announcementRoutes
);

app.use("/api/contact", contactRoutes);

/* FRONTEND STATIC FILES */
app.use(express.static(frontendPath));

/* REACT ROUTER FIX */
app.use((req, res) => {
  res.sendFile(
    path.join(frontendPath, "index.html")
  );
});

/* DATABASE */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(
        `Server running on port ${PORT}`
      );
    });
  })
  .catch((err) => {
    console.log("MongoDB Error:", err);
  });