import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import connectMongo from '@utils/connectMongo';

const collectionName = 'movies';

const handler = nc<NextApiRequest, NextApiResponse>();

handler.get(async (_req, res) => {
  try {
    const { db } = await connectMongo();
    const movies = await db
      .collection(collectionName)
      .find({})
      .limit(20)
      .toArray();

    return res.json({ movies, error: 0 });
  } catch (err) {
    return res.status(500).json({ error: JSON.stringify(err) });
  }
});

export default handler;
