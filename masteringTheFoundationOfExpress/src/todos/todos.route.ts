import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { client } from "../config/mongodb";

// const filePath = path.join(__dirname, "../../db/todo.json");
export const todosRouter = express.Router();

todosRouter.get("/", async (req: Request, res: Response) => {
  // const data = fs.readFileSync(filePath, { encoding: "utf-8" });
  // console.log(data);
  // res.json({
  //   message: "From Todos Router",
  //   data,
  // });

  const db = await client.db("todosDB");
  const collection = await db.collection("todos");

  const cursor = collection.find({});
  const todos = await cursor.toArray();

  res.json(todos);
});

todosRouter.post("/create-todo", async (req: Request, res: Response) => {
  const { title, description, priority } = req.body;

  const db = await client.db("todosDB");
  const collection = await db.collection("todos");
  await collection.insertOne({
    title: title,
    description: description,
    priority: priority,
    isCompleted: false,
  });

  const cursor = collection.find({});
  const todos = await cursor.toArray();

  // const todos = collection.find({});
  res.json(todos);

  // title
  // description
  // priority : High, Medium ,Low
  // isCompleted : true

  // const { title, body } = req.body;
  // console.log(title, body);
  // res.send("I am learning express with typescript");
});

todosRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");

  const todo = await collection.findOne({ _id: new ObjectId(id) });
  // console.log(id);

  // const { title, body } = req.body;
  // console.log(title, body);
  // res.send("Hello world");
  res.json(todo);
});

todosRouter.put("/update-todo/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");
  const { title, description, priority, isCompleted } = req.body;
  const filter = { _id: new ObjectId(id) };
  const updatedTodo = await collection.updateOne(
    filter,
    {
      $set: {
        title,
        description,
        priority,
        isCompleted,
      },
    },
    { upsert: true }
  );
  // console.log(title, body);
  // res.send("I am learning express with typescript");
  res.json(updatedTodo);
});

todosRouter.delete("/delete-todo/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");
  const data = await collection.deleteOne({ _id: new ObjectId(id) });
  // console.log(data);

  // res.json(data);
  res.json({
    message: "deleted succesfully",
  });

  // const { title, body } = req.body;
  // console.log(title, body);
  res.send("I am learning express with typescript");
});
