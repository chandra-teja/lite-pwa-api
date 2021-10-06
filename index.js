const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
require('dotenv').config();
mongoose.connect(process.env.url)
.then(()=>console.log('Db connected'))
.catch((err)=>console.log('Db connection error',err));

app.use(express.json());
app.use(cors());

const userRouter = require("./api/routes/userInfo")
app.use("/profilePage",userRouter);

const port = process.env.PORT || 8000;
app.listen(port, ()=> console.log(`server started at ${port}`));
