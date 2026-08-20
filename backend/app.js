import express from "express";
import todoRoutes from "./routes/todo.js";
import userRoutes from "./routes/user.js";
import columnRoutes from "./routes/column.js";
import projectRoutes from "./routes/project.js";
import { connectDB } from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import checkAuth from "./middleware/auth.js";

const app = express();
await connectDB();

const secret = "hello world";

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser(secret));

app.use("/todo", checkAuth, todoRoutes);
app.use("/user", userRoutes);
app.use("/board", checkAuth, columnRoutes);
app.use("/project", checkAuth, projectRoutes);

app.listen(3000, () => {
  console.log("server started");
});
