import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://@tour.nemxwwb.mongodb.net/todosDB?retryWrites=true&w=majority&appName=tour";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
