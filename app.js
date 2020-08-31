/* Imports */
import express from 'express';
import mongoose from 'mongoose';

import { studentRouter } from './routes/studentRouter.js';

/* Conexão com o MongoDB*/
(async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://fredcarderaro:20!FC!Ig@igtifullstak.oljgy.mongodb.net/grades?retryWrites=true&w=majority',
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

const app = express();
app.use(express.json());
app.use(studentRouter);

app.listen(3000, () => console.log('API iniciada'));
