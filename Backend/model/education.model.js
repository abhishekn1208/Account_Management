import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema({ 
    degree : {
        enum: ['High School', 'Associate', 'Bachelor', 'Master', 'PhD', 'Diploma', 'Other'],
        
    },
    college : {
        type : String,
        required : true
    },
    fieldOfStudy : {
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
    
  });
  
const Education = mongoose.model("Education", EducationSchema);

export default Education