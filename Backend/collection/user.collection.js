import Bio from "../model/bio.model.js";
import Education from "../model/education.model.js";
import Experience from "../model/experience.model.js";
import Interest from "../model/interest.model.js";
import Language from "../model/language.model.js";
import Profile from "../model/profile.model.js";
import Smedia from "../model/socialmedia.model.js";
import User from "../model/user.model.js";
import bcrypt from "bcrypt";
const saltRounds = 10;
import jwt from 'jsonwebtoken'

export const UserSignup=async(req,res)=>{
    const {email,password} = req.body;
    try {
     const user = await User.findOne({email})
     if(user){
         return res.status(400).json({message : 'User already exists try with another email'})
     }
     const hashedPassword = bcrypt.hashSync(password, saltRounds);
     const newUser = new User({email : email, password : hashedPassword,...req.body})
     await newUser.save()
     res.status(200).json(newUser)
    } catch (error) {
         res.status(500).json({message : 'Internal Server Error'})
    }
}


export const UserLogin=async(req,res)=>{
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email})
    if(!user){
        return res.status(404).json({message : 'User not found'})
    }

    const storedPassword = user.passowrd;

    const isPasswordMatched = bcrypt.compareSync(password, storedPassword);
    if (!isPasswordMatched) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.json({ token, user });
    } catch (error) {
        res.status(500).json({ error: "Server error" });

    }
}



export const updatePersonalInfo=async(req,res)=>{
    const {id} =  req.params;
    try {
        const user = await Profile.findById(id)

    if(!user){
        return res.status(400).json({message : 'User does not exists'})
    }

    const updatedUser = await Profile.findByIdAndUpdate(id,{...req.body},{new : true})
    await updatedUser.save()
    res.status(200).json({message : 'Updated successfully'})
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
}

export const editBio=async(req,res)=>{
    const {id} = req.params
    try {
        const bio = await Bio.findByIdAndUpdate(id,{...req.body},{new : true})
    await bio.save()
    res.status(200).json(bio)
    } catch (error) {
        res.status(500).json({message : 'Server Error'})
    }
}


export const updateEducation=async(req,res)=>{
    const {id} = req.params
  try {
    const education = await Education.findByIdAndUpdate(id,{...req.body},{new : true})
    await education.save()
    res.status(200).json(education)
  } catch (error) {
    res.status(500).json({message : 'Server Error'})
  }
}

export const updateLanguage=async(req,res)=>{
    const {id} = req.params
    try {
      const language = await Language.findByIdAndUpdate(id,{...req.body},{new : true})
      await language.save()
      res.status(200).json(language)
    } catch (error) {
      res.status(500).json({message : 'Server Error'})
    }
}


export const updateExperience=async(req,res)=>{
    const {id} = req.params
    try {
      const experience = await Experience.findByIdAndUpdate(id,{...req.body},{new : true})
      await experience.save()
      res.status(200).json(experience)
    } catch (error) {
      res.status(500).json({message : 'Server Error'})
    }
}

export const updateInterest=async(req,res)=>{
    const {id} = req.params
    try {
      const interest = await Interest.findByIdAndUpdate(id,{...req.body},{new : true})
      await interest.save()
      res.status(200).json(interest)
    } catch (error) {
      res.status(500).json({message : 'Server Error'})
    }
}

export const updateLinks=async(req,res)=>{
    const {id} = req.params
    try {
      const links = await Smedia.findByIdAndUpdate(id,{...req.body},{new : true})
      await links.save()
      res.status(200).json(links)
    } catch (error) {
      res.status(500).json({message : 'Server Error'})
    }
}