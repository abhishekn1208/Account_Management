import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({ 
    jobTitle : {
        type: String,
        required : true
    },
    companyName : {
        type : String,
        required : true
    },
    startDate : {
        type : Date,
        required : true,

    },
    endDate : {
        type : Date,
        required : true,

    },
    employmentType : {
        type : String,
        required : true
    },
    enum: [
        'Technology',
        'Healthcare',
        'Finance',
        'Education',
        'Manufacturing',
        'Retail',
        'Construction',
        'Government',
        'Marketing',
        'Other'
      ],
      city : {
        type : String,
        required : true
      }
    
  });
  
const Experience = mongoose.model("Experience", ExperienceSchema);

export default Experience