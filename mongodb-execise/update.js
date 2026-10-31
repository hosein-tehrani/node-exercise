const { MongoClient } = require("mongodb");
const values = require("./values");

const client = new MongoClient(values.DB_URL);
const connection = async () => {
  await client.connect();

  const db = client.db(values.DB_NAME);
  const userCollection = db.collection("userCollection");
  //   const result = await userCollection.updateOne(
  //     { name: "hossein" },
  //     { $set: { age: 32 } },
  //   ); //({find},{change},{query})
  //   const result = await userCollection.updateOne(
  //     { name: "hossein" },
  //     { $set: { age: 27 } },
  //   ); //$set=> setting a value
  //   const result = await userCollection.updateOne(
  //     { name: "hossein" },
  //     { $inc: { age: 3 } },
  //   ); //$inc => adding to an element
  //   const result = await userCollection.updateOne(
  //     { name: "hossein" },
  //     { $inc: { age: -3 } },
  //   ); //$inc => decreasing to an element ***still with $inc
  //   const result = await userCollection.updateOne(
  //     { name: "hossein" },
  //     { $rename: { age: "userAge" } },
  //   ); //$rename => renaming a key
  // const result = await userCollection.updateOne(
  //   { name: "hossein" },
  //   { $unset: { age: null } },
  // ); //$unset => removing a value
  //   const result = await userCollection.updateMany(
  //     {},
  //     { $rename: { firstName: "name" } },
  //   ); //$updateMany => renaming a key in multiple documents
  //   const result = await userCollection.updateOne(
  //     { name: "hossein" },
  //     { $push: { skills: "nextJS" } },
  //   ); //$push => push a value to array
  const result = await userCollection.updateOne(
    { name: "hossein" },
    { $pull: { skills: "vueJS" } },
  ); //$pull => remove a value from array
  console.log("updated:", result);
};

connection();
