import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({ 
    firstName : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid email address']
    },
    passowrd : {
        type : String,
        required : true
    }
})
    
  
const User = mongoose.model("User", UserSchema);

export default User