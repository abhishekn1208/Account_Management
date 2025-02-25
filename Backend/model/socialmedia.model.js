import mongoose from "mongoose";

const SocialMediaSchema = new mongoose.Schema({ 
    socialMedia: {
        type: Map,
        of: String, 
        default: {}
      }
    
  });
  
const Smedia = mongoose.model("Smedia", SocialMediaSchema);

export default Smedia