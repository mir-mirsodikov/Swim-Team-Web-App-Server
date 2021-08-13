import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

/* eslint-disable */
var mongo: MongoMemoryServer;

export async function connectDb(): Promise<void> {
  mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();
  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: 10,
  };
  await mongoose.connect(uri, mongooseOpts);
}

export async function closeDatabase(): Promise<void> {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongo.stop();
}

export async function clearDatabase(): Promise<void> {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany({});
  }
}