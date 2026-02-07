require('./models/db')
const cors=require("cors")
const express= require (`express`)
const dotenv= require ("dotenv").config();
const PORT=process.env.PORT || 3000
const app= express();
app.use(express.json());
app.use(cors())
app.get("/test",(req,res)=>{
    res.send("API WORKING")
})
app.use("/api/user",require("./routes/userRoutes"));
app.use("/api/category",require("./routes/categoryRoutes"));
app.use("/api/item",require("./routes/itemRoutes"));
app.use("/api/cart",require("./routes/cartRoutes"));
app.use("/api/cartitem",require("./routes/cartitemRoutes"));
app.use("/api/cancel",require("./routes/cancelRoutes"));
app.listen(PORT,()=>{
    console.log("Server is running")
})
