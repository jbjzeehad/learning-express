"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_route_1 = require("../todos/todos.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// const todosRouter = express.Router();
const userRouter = express_1.default.Router();
app.use("/todos", todos_route_1.todosRouter);
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
app.get("/", (req, res) => {
    // console.log({ req, res });
    res.send("Welcome to Todos App");
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
exports.default = app;
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
