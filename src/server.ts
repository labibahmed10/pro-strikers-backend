import mongoose from 'mongoose';
import config from './config';
import { Server } from 'http';
import app from './app';

const port = config.port;

let server: Server;

async function dbConnection() {
  try {
    await mongoose.connect(config.database_local_url as string);
    app.listen(port, () => {
      console.log(`app server listening on ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
dbConnection();

process.on('uncaughtException', () => {
  console.log('uncaughtException detected 😈, server closed 👻');
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
});

process.on('unhandledRejection', () => {
  console.log('unhandledRejection detected 😈, server closed 👻');
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
