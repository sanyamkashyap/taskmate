import React from "react";
import User from "../models/userModel.js";
import Session from "../models/sessionModel.js";

const checkAuth = async (req, res, next) => {
  try {
    const { sid } = req.signedCookies;
    console.log(sid);

    if (!sid) {
      res.clearCookie("sid");
      return res.status(401).json({ error: "1 Not logged!" });
    }

    const session = await Session.findById(sid);
    if (!session) {
      res.clearCookie("sid");
      return res.status(401).json({ error: "2 Not logged!" });
    }

    const user = await User.findOne({ _id: session.userId });

    if (!user) {
      return res.status(401).json({ error: "2 Not logged!" });
    }

    console.log({ user: user });

    req.user = user;
    next();
  } catch (err) {
    console.log(err);
  }
};

export default checkAuth;
