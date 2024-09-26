import dotenv from 'dotenv';
dotenv.config();
import asyncHandler from 'express-async-handler';

import express from "express";
import cors from "cors";
import foodRouter from './routers/food.router';
import userRouter from './routers/user.router';
import orderRouter from './routers/order.router';
import { dbConnect } from './configs/database.config';
dbConnect();

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    // origin:["http://localhost:4200"]
    origin:["https://food-mine-frontend.vercel.app"]
    // https://food-mine-frontend.vercel.app/
}));


// app.use("/api", foodRouter);
app.use("/api/foods", foodRouter);


app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter)
const port = 5000

app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})

module.exports = app;