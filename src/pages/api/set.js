// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient } from 'mongodb';

let cachedDb = null;

async function connectToDatabase(uri) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri);

  cachedDb = client.db(new URL(uri).pathname.substr(1));

  return cachedDb;
}

export default async function handler(req, res) {
  const db = await connectToDatabase(process.env.MONGODB_URI);

  const collection = db.collection('albertHealth');
  const {
    patients = [],
  } = req.body;

  try {
    await collection.insertMany(patients);

    res.status(200).json({ message: 'success' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}