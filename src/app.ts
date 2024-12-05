import express from 'express';
import cors from 'cors';
import logger from './other_services/winstonLogger';
import reviewRouter from './routes/reviewRouter';
import {testDBConnection} from './db_service/db_connection';
import createBackup from './db_service/backup';

const app = express();
app.use(cors());

app.use(express.json()); // for parsing application/json

//testDBConnection();


app.use(reviewRouter)

process.on('SIGINT', () => {
    logger.end();
    console.log('See ya later silly');
    process.exit(0);
  });

app.listen(3008, () => {
    console.log("Server8 is running on port 3008");
})

