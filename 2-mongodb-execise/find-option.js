const { MongoClient } = require("mongodb");
const values = require("./values");

const client = new MongoClient(values.DB_URL);
const connection = async () => {
  await client.connect();

  const db = client.db(values.DB_NAME);
  const userCollection = db.collection("userCollection");
  ///////////////////////////////////////////////////////////
  /////////////////// limiting the result number/////////////
  ///////////////////////////////////////////////////////////
  // const users = await userCollection
  //   .find(
  //     {},
  //     {
  //       limit: 2,
  //       skip: 1,
  //     },
  //   )
  //   .toArray();
  ////////////////////////////////////////////////////////////
  /////////////////// limiting the result number/////////////
  ///////////////////////////////////////////////////////////
  const users = await userCollection
    .find(
      {},
      {
        // sort: {age: 1} //smaller to bigger
        sort: { age: -1 }, //bigger to smaller
      },
    )
    .toArray();
  ///////////////////////////////////////////////////////////
  // projection + 0 don't show the mentioned keys in result//
  ///////////////////////////////////////////////////////////
  // const user = await userCollection.findOne(
  //   {
  //     skills: { $in: ["reactJS", "nodeJS"] },
  //   },
  //   {
  //     projection: {
  //       age: 0,
  //       lastname: 0,
  //     },
  //   },
  // );
  ///////////////////////////////////////////////////////////
  // projection + 1 just show the mentioned keys in result //
  ///////////////////////////////////////////////////////////
  const user = await userCollection.findOne(
    {
      skills: { $in: ["reactJS", "nodeJS"] },
    },
    {
      projection: {
        skills: 1,
        name: 1,
      },
    },
  );
  console.log("users:", users);
  console.log("user:", user);
};

connection();
