import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const formData = req.body;

      const client = await MongoClient.connect(
        "mongodb+srv://ktanzyl:R96oOyPibMGEhASK@contactsdata.pjqpyo8.mongodb.net/?retryWrites=true&w=majority"
      );
      const db = client.db();

      const contactsCollection = db.collection("contacts");

      const result = await contactsCollection.insertOne(formData);

      client.close();

      res.status(201).json({ message: "Contact form data inserted" });
    } catch (error) {
      console.error("Error inserting contact form data:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

export default handler;
