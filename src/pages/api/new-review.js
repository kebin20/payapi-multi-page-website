import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, name, comment, date } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://generaluser:1234@cluster0.ulhesxn.mongodb.net/reviews?retryWrites=true&w=majority"
    );
    const db = client.db();

    // Can use different name or same name as the database name for the collection
    const reviewsCollection = db.collection("reviews");

    const result = await reviewsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Review inserted" });
  }
}

export default handler;
