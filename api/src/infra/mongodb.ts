import { MongoClient } from 'mongodb';

export function connectMongodb(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URL || '';

  if (!uri) {
    throw new Error('Mongodb url must be provided.');
  }

  const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 5000,
  });

  return client.connect();
}
