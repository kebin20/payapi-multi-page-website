import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const formData = req.body;

      const client = await MongoClient.connect(
        "mongodb+srv://kebin:CQder2P2Su8aNUgV@contactsdata.4rkwnkf.mongodb.net/?retryWrites=true&w=majority"
      );
      const db = client.db();

      const contactsCollection = db.collection("contacts");

      const result = await contactsCollection.insertOne(formData);

      console.group(result);

      client.close();

      res.status(201).json({ message: "Contact form data inserted" });
    } catch (error) {
      console.error("Error inserting contact form data:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

export default handler;
