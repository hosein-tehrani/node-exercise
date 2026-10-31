const { MongoClient } = require("mongodb");
const values = require("./values");

const client = new MongoClient(values.DB_URL);
const connection = async () => {
  await client.connect();

  const db = client.db(values.DB_NAME);
  const userCollection = db.collection("userCollection");
  const result = await userCollection
    .aggregate([
      {
        $match: {
          skills: "reactJS",
        },
      },
      {
        $addFields: {
          userAge: "$age",
        },
      },
      {
        $project: {
          age: 0,
          //   skills: 1,
        },
      },
    ])
    .toArray();

  console.log("result:", result);
};

connection();
