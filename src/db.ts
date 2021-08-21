import mongoose from 'mongoose';

async function dbSetup(): Promise<void> {
  mongoose.connect(process.env.DB_CONNECT ?? 'DB', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    dbName: 'storage' }, () => {
    console.log('Database successfully connected');
  });
}

export default dbSetup;