import express from "express";
import Project from "../models/projectModel.js";
import Board from "../models/boardModel.js";
import checkAuth from "../middleware/auth.js";
// import { ObjectId } from "mongoose";

const router = express.Router();

// CREATE PROJECT
router.post("/", async (req, res) => {
  const userId = req.user._id;
  const { name, description } = req.body;

  console.log({ userId });
  const project = await Project.create({
    name,
    description,
    userId,
  });

  const board = await Board.create({
    title: "Kanban",
    projectId: project._id,
  });

  res.json({ project, board });
});

//get project
router.get("/", async (req, res) => {
  const userId = req.user._id;
  // console.log(userId);
  const project = await Project.find({
    userId,
  });

  res.json(project);
});

//get board
router.get("/:projectId/boards", async (req, res) => {
  const { projectId } = req.params;

  const board = await Board.find({ projectId: projectId }).lean();
  // console.log(board);
  res.json(board);
});

export default router;
