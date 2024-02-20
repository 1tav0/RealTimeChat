import mongoose from 'mongoose';
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please enter your full name"]
  },
  username: {
    type: String,
    required: [true, "Please enter a username"],
    unique: true
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"]
  },
  avatar: {
    type: String,
    default: ""
  }
});

const User = mongoose.model("User", userSchema);
export default User;

userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.isPasswordMatched = async function (password) {
  return await bcrypt.compare(this.password, password);
}