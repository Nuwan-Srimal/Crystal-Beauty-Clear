import express from "express";
import mongoose from "mongoose";
import studentRouter from "./routes/studentsRouter.js";
import userRouter from "./routes/userRouter.js";

const app = express()

app.use(express.json())

const connectionString = "mongodb+srv://<user_name>:<password>@cluster0.qnd4lep.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


mongoose.connect(connectionString).then(
    ()=>{
        console.log("Database connected")
    }
).catch(
    ()=>{
        console.log("Database connection failed")
    }
)


app.use("/students",studentRouter)
app.use("/users", userRouter)

app.listen(5000, 
    ()=>{
        console.log("Server is started")
        console.log("Thank you")
    }
)
