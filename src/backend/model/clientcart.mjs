import { time } from "console";
import mongoose from "mongoose";
import { Schema } from "mongoose";

const clientOrderSchema = new Schema(
  {
    firstname: {
      type: String,
      require: true,
    },
    lastname: {
      type: String,
      require: true,
    },
    phonenumber: {
      type: String,
      require: true,
    },

    deilverydata: {
      type: Date,
      require: true,
    },
    deilverytime: {
      type: String,
      require: true,
    },
    cart: {
      type: Array,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Clientorder", clientOrderSchema);