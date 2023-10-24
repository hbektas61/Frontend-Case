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

export { connectToDatabase };