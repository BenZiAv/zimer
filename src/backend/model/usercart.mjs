import { Schema } from "mongoose";
import mongoos from "mongoose";

const UserCartSchema = new Schema(
    {
      userid:{
        type:String,
        require:true
      },

      firstname: {
        type: String,
        require: true,
      },
      
      lastname: {
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
  
    },
    { timestamps: true }
  );
  
  export default mongoos.model("usercartdata",UserCartSchema);
  
  