const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://naveennaveen081426:NAVEEN2002@cluster0.e8z0f.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'office';

async function insertData() {
    let empData = {
        "name":"naveen",
        "age":"21",
        "role":"developer"
    }

    await client.connect();
    const db = client.db(dbName);
  const collection = await db.collection('employee');
  await collection.insertOne(empData);
  console.log("inserted");
}

insertData();