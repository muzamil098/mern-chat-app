import mongoose, { mongo, Schema } from "mongoose";

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 0,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"], //Enum is used if we have certain values
  },
  profilePic: {
    type: String,
    default: "",
  },
  //created at and updated at 
}, {timestamps: true});

const User = mongoose.model("User", userSchema);
export default User;