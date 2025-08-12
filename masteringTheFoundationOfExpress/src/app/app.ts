import express, { Application, NextFunction, Request, Response } from "express";
import { todosRouter } from "../todos/todos.route";
const app: Application = express();

app.use(express.json());

// const todosRouter = express.Router();
const userRouter = express.Router();

app.use("/todos", todosRouter);
app.use("/users", userRouter);

// todosRouter.get("/todos", (req: Request, res: Response) => {
//   const data = fs.readFileSync(filePath, { encoding: "utf-8" });

//   console.log(data);

//   res.json({
//     message: "From Todos Router",
//     data,
//   });
// });

// const filePath = path.join(__dirname, "../../db/todo.json");

app.get(
  "/",
  (req: Request, res: Response, next: NextFunction) => {
    console.log({
      url: req.url,
      method: req.method,
      header: req.header,
    });
    next();
  },

  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // console.log(Something);

      res.send("Welcome to Todos App");
    } catch (error) {
      next(error);
    }
    // res.send("Welcome to Todos App");
  }
);
app.get(
  "/error",

  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // console.log(something);
      res.send("Welcome to Error App");
    } catch (error) {
      next(error);
    }

    // res.send("Welcome to Todos App");
  }
);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send({ message: "Route not fouund" });
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    console.log("error", error);
    res.status(400).json({
      message: "Something went wrong from global error handler",
      error,
    });
  }
});

// app.get("/todos", (req: Request, res: Response) => {
//   console.log("From Query", req.query);
//   console.log("From Params", req.params);

//   const data = fs.readFileSync(filePath, { encoding: "utf-8" });

//   res.json(data);
// });

// app.get("/todos/:title/:body", (req: Request, res: Response) => {
//   console.log("From Query", req.query);
//   console.log("From Params", req.params);

//   const data = fs.readFileSync(filePath, { encoding: "utf-8" });
//   res.writeHead(200, {
//     "content-type": "application/json",
//   });

//   res.end(data);

//   console.log(data);

//   res.send("I am learning express with typescript");
//   res.send(data);
//   res.json(data);
// });
// ----------------------
// app.post("/todos/create-todo", (req: Request, res: Response) => {
//   const { title, body } = req.body;
//   // console.log(title, body);
//   res.send("I am learning express with typescript");
// });

// [app] - [express.json] - [todosRouter] - [Root Route "/"] - [GET "/todos"]

// [todosRouter] - [get all todos /todos GET] - [create todo /todos/create-todo POST todo]

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
