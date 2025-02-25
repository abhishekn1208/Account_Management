import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({ 
    firstName : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    gender : {
        type : String,
        required : true,
        enum : ['Male', 'Female' , 'Other']

    },
    address : {
    street: { type: String, required: true, trim: true }, 
    apartment: { type: String, required: false, trim: true }, 
    city: { type: String, required: true, trim: true },
    state: { type: String, required: true, trim: true },
    postalCode: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true }
    },
    email : {
        type : String,
        required: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid email address']
    },
  });
  
const Profile = mongoose.model("Profile", ProfileSchema);

export default Profile