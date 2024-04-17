import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: true,
  },
  email: {
    type: String,
    required:   [true, "Email is required"],
    unique: true,

  },
  password: {
    type: String,
    required: [true, "Password is required"]
  },
  isVerified:{
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPassword: {
    type: String,
    default: "",
  },
  forgotPasswordExpires: {
    type: Date,
    default: Date.now(),
  },
  verificationToken: {
    type: String,
    default: "",
  },
  verificationTokenExpires: {
    type: Date,
    default: Date.now(),
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },

});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
