require("dotenv").config(); //to require file .env

//calling express
const express=require("express");
const connectDB=require("./config/db");
const productRoutes=require("./routes/productRoutes");
const cartRoutes=require("./routes/cartRoutes");

connectDB();
const app=express();

app.use(express.json());


app.use("/api/products",productRoutes)
const PORT=process.env.PORT||5000;
 app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))