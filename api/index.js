import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Mongodb connected...");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

const port=process.env.BACKEND_PORT;
app.listen(port, () => {
  console.log(`server is running in port ${port}`);
});

app.use('/api/user', userRoutes);


