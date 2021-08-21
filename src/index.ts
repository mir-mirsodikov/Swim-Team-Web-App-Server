/**
 * If this is being run from the compiles js files,
 * register module-alias
 */
// @ts-ignore
if (!process[Symbol.for('ts-node.register.instance')]) {
  require('module-alias/register');
}

import app from './app';
import dbSetup from './db';
import dotenv from 'dotenv';

dotenv.config();

async function main() {
  await dbSetup();
  app.listen(3000, '192.168.0.233', () => {
    console.log(`Server started on port ${process.env.PORT}`);
  });
}

main().catch(err => console.error(err));