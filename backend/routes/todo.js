import express from "express";
import Todo from "../models/todoModel.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const userId = req.user._id;
    // console.log(userId);
    const todo = await Todo.find({ userId: userId }).lean();
    // console.log(todo);
    res.json(todo);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.post("/:columnId", async (req, res) => {
  const user_Id = req.user._id;
  const { title, description } = req.body;
  const { columnId } = req.params;
  const addTodo = await Todo.create({
    title,
    description,
    columnId,
    userId: user_Id,
  });

  console.log(addTodo);

  res.json("todo added");
});

export default router;
