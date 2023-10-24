import { connectToDatabase } from '@/database';

export default async function handler(req, res) {
  const db = await connectToDatabase(process.env.MONGODB_URI);

  const collection = db.collection('albertHealth');
  const { id = -1, imageURL = '' } = req.body;

  try {
    await collection.updateOne(
        { id },
        { $push: { documents: imageURL } }
    );
console.log({ id },
  { $push: { documents: imageURL } });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}