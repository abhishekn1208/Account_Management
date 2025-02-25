import mongoose from "mongoose";

const LanguageSchema = new mongoose.Schema({ 
   language : {
    type : String,
    enum : ['English', 'Hindi','Spanish','Arabic','Tamil'],
    default : 'English'
   }
  });
  
const Language = mongoose.model("Language", LanguageSchema);

export default Language