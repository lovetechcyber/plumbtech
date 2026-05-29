import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Contact from "../models/contact.js";
import { verifyAdmin } from "../middleware/authMiddleware.js";

dotenv.config();

const router = express.Router();

const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_PASSWORD;

/* =========================
   🔐 LOGIN ADMIN
========================= */
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields required" });
  }

  if (email !== adminEmail || password !== adminPassword) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // ACCESS TOKEN (short life)
  const accessToken = jwt.sign(
    { role: "admin", email },
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
  );

  // REFRESH TOKEN (long life)
  const refreshToken = jwt.sign(
    { role: "admin", email },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: "7d" }
  );

  // STORE REFRESH TOKEN IN HTTP ONLY COOKIE
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: false, // set true in production (HTTPS)
    sameSite: "strict",
  });

  res.json({
    message: "Login successful",
    accessToken,
  });
});


/* =========================
   🔁 REFRESH TOKEN ROUTE
========================= */
router.get("/refresh", (req, res) => {
  const token = req.cookies?.refreshToken;

  if (!token) {
    return res.status(401).json({ message: "No refresh token" });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_REFRESH_SECRET
    );

    const newAccessToken = jwt.sign(
      { role: "admin", email: decoded.email },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

    res.json({ accessToken: newAccessToken });

  } catch (err) {
    return res.status(403).json({ message: "Invalid refresh token" });
  }
});


/* =========================
   📩 GET MESSAGES (PROTECTED)
========================= */
router.get("/messages", async (req, res) => {
  const messages = await Contact.find().sort({ createdAt: -1 });
  res.json(messages);
});

export default router;