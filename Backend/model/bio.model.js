import mongoose from "mongoose";

const BioSchema = new mongoose.Schema({ 
   bio : {
    type : String,
    required : true,
    maxlength: 500
   }
  });
  
const Bio = mongoose.model("Bio", BioSchema);

export default Bio