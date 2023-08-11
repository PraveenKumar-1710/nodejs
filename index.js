const express = require('express');
const app=express();
const userRouter = require("./router/userRouter");
const database = require("./database");
require('dotenv').config()

database()
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(userRouter);
app.listen(3000,()=>{
    console.log("Server is started at 3000...");
});