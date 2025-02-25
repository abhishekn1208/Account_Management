import express from 'express'
const router = express.Router()
import {updatePersonalInfo,UserSignup,UserLogin,editBio,updateLinks,updateEducation,updateLanguage,updateExperience,updateInterest} from '../collection/user.collection.js'
import auth from '../middleware/auth.js'



//Signup
router.post('/register',UserSignup)

//login
router.post('/login',UserLogin)

//to edit bio
router.patch('/bio/:id',auth,editBio)

//to edit perosonal Info
router.patch('/personalInfo/:id',auth,updatePersonalInfo)

//to edit education details
router.patch('/education/:id',auth,updateEducation)

//to edit language
router.patch('/language/:id',auth,updateLanguage)

//to edit experience
router.patch('/experience/:id',auth,updateExperience)

//to edit Interest
router.patch('/interest/:id',auth,updateInterest)

//to edit Social Media Links
router.patch('/links/:id',auth,updateLinks)
export default router