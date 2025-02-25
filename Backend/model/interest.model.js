import mongoose from "mongoose";

const interestedTopicsSchema= new mongoose.Schema({ 
    interestedTopics : {
        type: [String], 
        default: []
   }
  });
  
const Interest = mongoose.model("Interest", interestedTopicsSchema);

export default Interest