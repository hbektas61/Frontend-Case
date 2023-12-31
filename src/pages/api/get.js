import { connectToDatabase } from '@/database';

export default async function handler(req, res) {
  const db = await connectToDatabase(process.env.MONGODB_URI);

  const collection = db.collection('albertHealth');
  const { query = {} } = req;
  const filter = Object.keys(query).reduce((acc, item) => {
    let value;

    switch (true) {
      case ['name'].includes(item):
        value = { $regex : query[item], $options: 'i' };
        break;
      case ['age'].includes(item):
        value = Number[query[item]];
        break;
      default:
        value = query[item];
        break;
    }

    acc[item] = value;

    return acc;
  }, {});

  try {
    const data = await collection.find(filter).toArray();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}