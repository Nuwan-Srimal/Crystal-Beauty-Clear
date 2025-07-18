import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email : {
            type : String,
            required : true,
            unique :true
        },
        firestName : {
            type : String,
            required : true
        },
        lastName : {
            type : String,
            required : true
        },
        password : {
            type : String,
            required : true
        },
        role : {
            type : String,
            required : true,
            default : "user"
        },
        isBlack : {
            type : Boolean,
            default : false
        },
        isEmailVerified : {
            type : Boolean,
            default : false
        },
        Image : {
            type : String,
            default : "https://www.gravatar.com/avatar/"
        }
    }
)

const User = mongoose.model("User", userSchema)
export default User