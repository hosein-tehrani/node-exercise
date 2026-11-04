const { MongoClient } = require("mongodb");
const values = require("./values");

const client = new MongoClient(values.DB_URL);
const connection = async () => {
  await client.connect();

  const db = client.db(values.DB_NAME);
  const userCollection = db.collection("userCollection");
  //   const users = await userCollection.find({}).toArray(); //all
  //   const users = await userCollection.find({ age: { $gt: 21 } }).toArray(); // greater than
  //   const users = await userCollection.find({ age: { $lt: 22 } }).toArray(); //lower than
  //    const users = await userCollection.find({ age: { $lte: 22 } }).toArray(); //lower than, equal
  //   const users = await userCollection.find({ "adress.city": "tehran" }).toArray(); //searching in oblect
  //   const users = await userCollection.find({ skills: "reactJS" }).toArray(); //searching in Arrays and string
  //   const users = await userCollection
  //     .find({ skills: { $in: ["reactJS", "nodeJS"] } })
  //     .toArray(); //"$in" =>searching in Arrays with several options
  const users = await userCollection.findOne({
    skills: { $in: ["reactJS", "nodeJS"] },
  }); //"findOne" => return first result - **don't need "toArray()"
  console.log("users:", users);
};

connection();
