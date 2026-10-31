const { MongoClient, ObjectId } = require("mongodb");
const values = require("./values");

const client = new MongoClient(values.DB_URL);
const connection = async () => {
  await client.connect();

  const db = client.db(values.DB_NAME);
  const userCollection = db.collection("userCollection");
  const deleteDocument = await userCollection.deleteOne({
    _id: new ObjectId("6ae590a02c57a212711d3075"),
  });

  console.log("DELETE DOCUMENT: ", deleteDocument);

};

connection();
