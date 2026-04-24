import express from "express";
import User from "../models/userModel.js";
import checkAuth from "../middleware/auth.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { name, username, email, password } = req.body;
  const user = await User.create({
    name,
    username,
    email,
    password,
  });
  res.json(user);
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
  }).lean();

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  // console.log(user);

  const cookiePayload = JSON.stringify({
    id: user._id.toString(),
    expire: Math.round(Date.now() / 1000 + 100000),
  });

  res.cookie("token", Buffer.from(cookiePayload).toString("base64url"), {
    httpOnly: true,
    signed: true,
    maxAge: 60 * 1000 * 60 * 24 * 7,
  });

  res.json(user);
});

export default router;
