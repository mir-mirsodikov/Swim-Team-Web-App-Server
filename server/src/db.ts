import mongoose from 'mongoose';

async function dbSetup(): Promise<void> {
  mongoose.connect(process.env.DB_CONNECT ?? 'DB', () => {
    console.log('Database successfully connected');
  });
}

export default dbSetup;