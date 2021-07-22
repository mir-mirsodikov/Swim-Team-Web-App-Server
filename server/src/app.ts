import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import 'module-alias/register';
const cors = require('cors');
import routes from './routes/index';

dotenv.config();

const app: express.Application = express();
const dbConnection: string = process.env.DB_CONNECT ?? 'null';
const port = process.env.PORT ?? 3000;

app.use(express.json());
app.use(cors());
app.use(routes);

mongoose.connect(dbConnection, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'storage'}, () => {
    console.log('Connected to DB');
});

app.listen(port, () => console.log('Server started on port ' + port));