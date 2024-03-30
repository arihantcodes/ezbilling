import mongoose, { model, models } from "mongoose";


const userSchema = new mongoose.Schema({
    clerkId:{
        type: String,
        required: true,
        unique:true
    },
    email:{
        type: String,
        required: true,
        unique:true

    },
    password:{
        type: String,
        required: true
    },
    

})

const User = models?.User || model("User", userSchema);

export default User;