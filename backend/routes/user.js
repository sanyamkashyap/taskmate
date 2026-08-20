import express from "express";
import User from "../models/userModel.js";
import checkAuth from "../middleware/auth.js";
import Session from "../models/sessionModel.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    const user = await User.create({
      name,
      username,
      email,
      password,
    });
    res.json(user);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email,
    }).lean();
    const session = await Session.findById(req.signedCookies.sid);

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // console.log(user);

    // const cookiePayload = JSON.stringify({
    //   id: user._id.toString(),
    //   expire: Math.round(Date.now() / 1000 + 100000),
    // });

    if (!session) {
      const session = await Session.create({ userId: user._id });
      res.cookie("sid", session._id, {
        httpOnly: true,
        signed: true,
        maxAge: 60 * 1000 * 60 * 24 * 7,
      });
    }

    res.json(user);
  } catch (err) {
    res.err(err);
    console.err(err);
  }
});

export default router;
