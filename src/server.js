const app = require('./app');
const config = require('./config/config');
const logger = require('./config/logger');
const connectDB = require('./config/database');
const seedDefaultData = require('./scripts/seed');

const port = config.port;

// Handle Uncaught exceptions
process.on('uncaughtException', (err) => {
  logger.error('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  logger.error(err.name, err.message);
  process.exit(1);
});

connectDB().then(async () => {
  await seedDefaultData();
  const server = app.listen(port, () => {
    logger.info(`Server is running on port: ${port}`);
  });
});


// Handle Unhandled Rejections
process.on('unhandledRejection', (err) => {
  logger.error('UNHANDLED REJECTION! 💥 Shutting down...');
  logger.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
