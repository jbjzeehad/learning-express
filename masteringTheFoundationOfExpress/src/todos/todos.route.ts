import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";

const filePath = path.join(__dirname, "../../db/todo.json");
export const todosRouter = express.Router();

todosRouter.get("/", (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });
  console.log(data);
  res.json({
    message: "From Todos Router",
    data,
  });
});

todosRouter.post("/create-todo", (req: Request, res: Response) => {
  // title
  // description
  // priority : High, Medium ,Low
  // isCompleted : true

  const { title, body } = req.body;
  console.log(title, body);
  res.send("I am learning express with typescript");
});

todosRouter.get("/:title", (req: Request, res: Response) => {
  const { title, body } = req.body;
  console.log(title, body);
  res.send("I am learning express with typescript");
});

todosRouter.put("/update-todo/:title", (req: Request, res: Response) => {
  const { title, body } = req.body;
  console.log(title, body);
  res.send("I am learning express with typescript");
});

todosRouter.delete("/delete-todo/:title", (req: Request, res: Response) => {
  const { title, body } = req.body;
  console.log(title, body);
  res.send("I am learning express with typescript");
});
