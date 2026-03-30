import express from 'express';
import mongoose from "mongoose"
import user_router from "./userRouter"
import cors from 'cors';
import * as dotenv from 'dotenv'; // 1. Импорт

dotenv.config();

const app = express()
const PORT = process.env.PORT || 3000;
const URL_DB = process.env.URL_DB as string;

app.use(express.json( ))
app.use(cors());
app.use("/api",user_router)

async function startApp(){
    try{
        await mongoose.connect(URL_DB)
        app.listen(PORT,() => console.log('Server start on port', PORT))
    } catch (e){
        console.log(e)
    }
}

startApp()