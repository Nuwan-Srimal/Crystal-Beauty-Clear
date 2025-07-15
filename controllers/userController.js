import User from "../models/user.js";
import bcrypt from "bcrypt"

export function createUser(req,res){
    
    const hashedpassword = bcrypt.hashSync(req.body.password, 10)

    const user = new User(
        {
            email : req.body,email,
            firestName : req.body.firestName,
            lastName : req.body.lastName,
            password : hashedpassword
        }
    )
    user.save().then(
        ()=>{
            res.json({
                message: "User created successfully"
            })
        }
    ).catch(
        ()=>{
            res.json({
                message: "Failed to create user"
            })
        }
    )
}


export function loginUser(req,res){
    User.findOne(
        {
            email : req.body.email
        }
    ).then(
        (user)=>{
            if(user == null){
                res.json(
                    {
                        message : "User not found"
                    }
                )
            }else{
                const isPasswordMatching = bcrypt.compareSync(req.body.password, user.password)
                if(isPasswordMatching){
                    res.json(
                        {
                            message : "Login successful"
                        }
                    )
                }else{
                    res.json(
                        {
                            message : "Login unsuccessful"
                        }
                    )
                }
            }
        }
    )
}
