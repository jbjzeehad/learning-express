import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";
const app: Application = express();

app.use(express.json());

const filePath = path.join(__dirname, "../../db/todo.json");

app.get("/", (req: Request, res: Response) => {
  // console.log({ req, res });
  res.send("Welcome to Todos App");
});
app.get("/todos/:title/:body", (req: Request, res: Response) => {
  console.log("From Query", req.query);
  console.log("From Params", req.params);

  const data = fs.readFileSync(filePath, { encoding: "utf-8" });
  // res.writeHead(200, {
  //   "content-type": "application/json",
  // });

  // res.end(data);

  // console.log(data);

  // res.send("I am learning express with typescript");
  // res.send(data);
  res.json(data);
});
app.post("/todos/create-todo", (req: Request, res: Response) => {
  const { title, body } = req.body;
  // console.log(title, body);
  res.send("I am learning express with typescript");
});

export default app;

/**
 *
 * server - server handling like - starting, closing, error handling of server. only related to server
 *
 *
 * app file - routing handle, middleware, route realted error
 *
 *
 * app folder - app business logic handling like create read write update delete, database related works
 *
 */
