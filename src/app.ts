import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());

app.use(express.json()); // for parsing application/json

//testDBConnection();
//createBackup();



process.on('SIGINT', () => {
    //logger.end();
    console.log('See ya later silly');
    process.exit(0);
  });

app.listen(3008, () => {
    console.log("Server8 is running on port 3008");
})

