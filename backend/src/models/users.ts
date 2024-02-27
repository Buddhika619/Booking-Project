import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs'

export type UserType = {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    validate: [validator.isEmail, "Please provide a valid email"],
    unique: true,
  },
  password: { type: String, required: [true, "Please provide a password"] },
  firstName: {
    type: String,
    required: [true, "Please tell us your first name!"],
  },
  lastName: {
    type: String,
    required: [true, "Please tell us your first name!"],
  },
});


userSchema.pre('save', async function(next) {
  if(this.isModified('passsword')) {
    this.password = await bcrypt.hash(this.password, 8)
  }
  next();
})

const User = mongoose.model<UserType>("User", userSchema);

export default User;  
