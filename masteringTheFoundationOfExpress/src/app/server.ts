import { MongoClient, ServerApiVersion } from "mongodb";
import app from "./app.js";

let server;
const port = 5000;

const uri =
  "mongodb+srv://mongodb:mongodb123456@tour.nemxwwb.mongodb.net/todosDB?retryWrites=true&w=majority&appName=tour";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const bootstrap = async () => {
  await client.connect();
  console.log("Connected to MongoDB");
  // const db = await client.db("todosDB");
  // const collection = await db.collection("todos").insertOne({
  //   title: "MongoDb",
  //   body: "Mongodb",
  // });
  // console.log(db, "db");
  // console.log(collection, "collection");

  server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

bootstrap();
