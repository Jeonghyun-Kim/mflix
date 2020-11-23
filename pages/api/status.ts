import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import connectMongo from '@utils/connectMongo';

const handler = nc<NextApiRequest, NextApiResponse>();

handler.get(async (_req, res) => {
  try {
    const { client } = await connectMongo();
    if (!client.isConnected())
      return res
        .status(500)
        .json({ status: 'failed', error: 'database server not responding' });
    return res.json({ status: 'ok', error: 0 });
  } catch (err) {
    return res.json({ error: JSON.stringify(err) });
  }
});

export default handler;
