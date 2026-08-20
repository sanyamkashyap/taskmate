import express from "express";
import Column from "../models/columnModel.js";

const router = express.Router();

router.get("/:boardId/column", async (req, res) => {
  try {
    const { boardId } = req.params;
    // console.log(boardId);
    const columns = await Column.find({ board_id: boardId }).lean();
    // console.log(columns);
    res.json(columns);
  } catch (err) {
    res.json(err);
    console.log(err);
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
