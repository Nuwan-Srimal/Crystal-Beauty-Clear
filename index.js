import express from "express";
import mongoose from "mongoose";
import studentRouter from "./routes/studentsRouter.js";
import userRouter from "./routes/userRouter.js";
import jwt from "jsonwebtoken"

const app = express()

app.use(express.json())

app.use(
    (req,res,next)=>{
        let token = req.header("Authorization")

        if(token !=null){
            token = token.replace("Bearer ","")
            console.log(token)
            jwt.verify(token, "jwt-(---)",
                (err, decoded)=>{
                    if(decoded == null){
                        res.json({
                            message: "Invalid token please login again"
                        })
                        return
                    }else{
                        req.user = decoded
                    }
                }
            )
        }
        next()
    }
)

const connectionString = "mongodb+srv://admin:<password>@cluster0.qnd4lep.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


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
app.use("/users",userRouter)


app.listen(5000, 
    ()=>{
        console.log("Server is started")
        console.log("Thank you")
    }
)
