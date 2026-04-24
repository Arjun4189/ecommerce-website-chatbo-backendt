const express = require('express');
const app=express();
const dotenv= require('dotenv');
const connectDatabase=require('./config/connectdatabase');
const path = require('path');
const cors = require('cors');
dotenv.config({path: path.join(__dirname, 'config', 'config.env') });
const products =require("./routes/product");
const orders=require('./routes/order');  
const userRoutes = require("./routes/user");

connectDatabase();

app.use(express.json()); 
app.use(cors());
app.use('/api/v1/products',products);
app.use('/api/v1/order',orders);
app.use("/api/v1/user", userRoutes);

 



app.listen(process.env.PORT,()=>{
    console.log(`server is listening ${process.env.PORT}and${process.env.NODE_ENV} mode`);
});   