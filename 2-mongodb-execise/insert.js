const { MongoClient } = require("mongodb");
const values = require("./values");

const client = new MongoClient(values.DB_URL);
const connection = async () => {
  await client.connect();

  const db = client.db(values.DB_NAME);
  const userCollection = db.collection("userCollection");
  const insertOne = await userCollection.insertOne({
    name: "hossein",
    lastname: "tehrani",
    age: 27,
    hobbies: ["sleeping"],
    skills: ["vueJS", "reactJS", "nodeJS", "nestJS", "expressJS"],
    identity: "0022586024",
  });
  const insertMany = await userCollection.insertMany([
    {
      name: "ali",
      lastname: "eskandari",
      age: 22,
      hobbies: ["reading", "surfing"],
      skills: ["reactJS", "javascript"],
    },
    {
      name: "amir",
      lastname: "moradi",
      age: 20,
      hobbies: ["gaming"],
      skills: ["nodeJS", "nestJS", "expressJS"],
    },
  ]);

  console.log("INSERT ONE: ", insertOne);
  console.log("INSERT MANY: ", insertMany);
};

connection();
