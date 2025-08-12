"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const mongodb_2 = require("../config/mongodb");
// const filePath = path.join(__dirname, "../../db/todo.json");
exports.todosRouter = express_1.default.Router();
exports.todosRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const data = fs.readFileSync(filePath, { encoding: "utf-8" });
    // console.log(data);
    // res.json({
    //   message: "From Todos Router",
    //   data,
    // });
    const db = yield mongodb_2.client.db("todosDB");
    const collection = yield db.collection("todos");
    const cursor = collection.find({});
    const todos = yield cursor.toArray();
    res.json(todos);
}));
exports.todosRouter.post("/create-todo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, priority } = req.body;
    const db = yield mongodb_2.client.db("todosDB");
    const collection = yield db.collection("todos");
    yield collection.insertOne({
        title: title,
        description: description,
        priority: priority,
        isCompleted: false,
    });
    const cursor = collection.find({});
    const todos = yield cursor.toArray();
    // const todos = collection.find({});
    res.json(todos);
    // title
    // description
    // priority : High, Medium ,Low
    // isCompleted : true
    // const { title, body } = req.body;
    // console.log(title, body);
    // res.send("I am learning express with typescript");
}));
exports.todosRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const db = yield mongodb_2.client.db("todosDB");
    const collection = yield db.collection("todos");
    const todo = yield collection.findOne({ _id: new mongodb_1.ObjectId(id) });
    // console.log(id);
    // const { title, body } = req.body;
    // console.log(title, body);
    // res.send("Hello world");
    res.json(todo);
}));
exports.todosRouter.put("/update-todo/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const db = yield mongodb_2.client.db("todosDB");
    const collection = yield db.collection("todos");
    const { title, description, priority, isCompleted } = req.body;
    const filter = { _id: new mongodb_1.ObjectId(id) };
    const updatedTodo = yield collection.updateOne(filter, {
        $set: {
            title,
            description,
            priority,
            isCompleted,
        },
    }, { upsert: true });
    // console.log(title, body);
    // res.send("I am learning express with typescript");
    res.json(updatedTodo);
}));
exports.todosRouter.delete("/delete-todo/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const db = yield mongodb_2.client.db("todosDB");
    const collection = yield db.collection("todos");
    const data = yield collection.deleteOne({ _id: new mongodb_1.ObjectId(id) });
    // console.log(data);
    // res.json(data);
    res.json({
        message: "deleted succesfully",
    });
    // const { title, body } = req.body;
    // console.log(title, body);
    res.send("I am learning express with typescript");
}));
