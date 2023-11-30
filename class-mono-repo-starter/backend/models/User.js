import mongoose from "mongoose";

import crypto from "crypto"  //  Imports the Node.js crypto library for generating secure random strings.

const { Schema } = mongoose

export const userSchema = new Schema({
  // define the username field
  username: {
    type: String,
    required: true,
    minlength: 5,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  accessToken: {
    type: String,
    default: "7867896767868796789lkhhj98789"
  }
},
{
  timestamps: true
}
)

// exporting userSchema all around the project
export const UserModel = mongoose.model("user", userSchema)