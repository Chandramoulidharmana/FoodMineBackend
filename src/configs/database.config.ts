import dotenv from 'dotenv';
dotenv.config();
import {connect, ConnectOptions} from 'mongoose';

console.log(process.env.MONGO_URI);

export const dbConnect = () => {
    connect(process.env.MONGO_URI!, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true
    } as ConnectOptions).then(
        () => console.log("Connect Successfully"),
        (error) => console.log(error)
    )
}