import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import connectMongo from '@utils/connectMongo';

const handler = nc<NextApiRequest, NextApiResponse>();

handler.get(async (req, res) => {
  const term = req.query.term;
  try {
    const { db } = await connectMongo();

    const data = await db
      .collection('movies')
      .aggregate([
        {
          $search: {
            autocomplete: {
              path: 'title',
              query: term,
            },
          },
        },
        {
          $limit: 20,
        },
      ])
      .toArray();

    return res.json(data);
  } catch (err) {
    return res.status(500).json({ error: JSON.stringify(err) });
  }
});

export default handler;
