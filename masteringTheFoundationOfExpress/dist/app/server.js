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
const mongodb_1 = require("mongodb");
const app_js_1 = __importDefault(require("./app.js"));
let server;
const port = 5000;
const uri = "mongodb+srv://mongodb:mongodb123456@tour.nemxwwb.mongodb.net/todosDB?retryWrites=true&w=majority&appName=tour";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new mongodb_1.MongoClient(uri, {
    serverApi: {
        version: mongodb_1.ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});
const bootstrap = () => __awaiter(void 0, void 0, void 0, function* () {
    yield client.connect();
    console.log("Connected to MongoDB");
    // const db = await client.db("todosDB");
    // const collection = await db.collection("todos").insertOne({
    //   title: "MongoDb",
    //   body: "Mongodb",
    // });
    // console.log(db, "db");
    // console.log(collection, "collection");
    server = app_js_1.default.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
});
bootstrap();
