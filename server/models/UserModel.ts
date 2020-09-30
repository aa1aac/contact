import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcrypt";

export interface UserType extends Document {
  name: String;
  email: String;
  password: String;
}

const UserSchema: Schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

UserSchema.pre<UserType>("save", async function (next) {
  const user = this;

  try {
    if (!user.isModified("password")) return next();

    user.password = await bcrypt.hash(user.password, 13);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

// todo add check password
export const User = mongoose.model<UserType>("user", UserSchema);
