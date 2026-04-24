import React from "react";
import User from "../models/userModel.js";

const checkAuth = async (req, res, next) => {
  const { token } = req.signedCookies;

  if (!token) {
    return res.status(401).json({ error: "Not logged!" });
  }

  const { id, expire } = JSON.parse(Buffer.from(token, "base64url").toString());

  const jsonPayload = JSON.parse(Buffer.from(token, "base64url").toString());

  if (expire < Math.round(Date.now() / 1000)) {
    return res.status(401).json({ error: "Token expired" });
  }

  const user = await User.findOne({ _id: id });

  if (!token || !user) {
    return res.status(401).json({ error: "Not logged!" });
  }

  // console.log(user);

  req.user = user;
  next();
};

export default checkAuth;
