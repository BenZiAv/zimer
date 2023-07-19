import mongoos from "mongoose";
import { Schema } from "mongoose";

const signUpUsersSchema = new Schema(
  {
    firstname: {
      type: String,
      require: true,
    },
    lastname: {
      type: String,
      require: true,
    },

    id: {
      type: String,
      require: true,
      unique: true,
    },

    mail: {
      type: String,
      require: true,
      unique: true,
    },

    password: {
      type: String,
      require: true,
    },

    city: {
      type: String,
      require: true,
    },

    address: {
      type: String,
      require: true,
    },

    phonenumber: {
      type: String,
      require: true,
    },

    role: {
      type: String,
      require: true,
      default:"user"
    },
  },
  { timestamps: true },
);

export default mongoos.model("signupuserdata", signUpUsersSchema);