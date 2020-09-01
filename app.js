/* Imports */
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import { studentRouter } from './routes/studentRouter.js';

const app = express();
app.use(express.json());
app.use(studentRouter);

dotenv.config();

/* Conexão com o MongoDB*/
(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.USERDB}:${process.env.PWDDB}@igtifullstak.oljgy.mongodb.net/grades?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log('Connected.');
  } catch (err) {
    console.log('Connection fail: ' + err);
  }
})();

app.listen(process.env.PORT, () => console.log('API iniciada'));
