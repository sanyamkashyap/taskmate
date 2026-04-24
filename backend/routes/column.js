import express from "express";
import Column from "../models/columnModel.js";

const router = express.Router();

router.get("/column", async (req, res) => {
  try {
    const columns = await Column.find().lean();
    console.log(columns);
    res.json(columns);
  } catch (err) {
    res.json(err);
  }
});

router.post("/column", async (req, res) => {
  try {
    const { name, status, boardId } = req.body;

    const createColumn = await Column.create({
      name,
      status,
      board_id: boardId,
    });
    res.json("column created");
  } catch (err) {
    res.json({ message: err });
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  const board = await Board.find().lean();
  // console.log(board);
  res.json(board);
});

export default router;
