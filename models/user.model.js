import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: [true, "username is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  isverified: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: {
    type: String,
  },
  forgotpasswordtokenexpires: Date,
  verifytoken: String,
  verifytokenexpires: Date,
  yourbills:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bills"
    },
   
  ]
});


const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;