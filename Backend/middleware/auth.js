import jwt from 'jsonwebtoken'

const auth =(req,res,next)=>{
  try {
    const token = req.headers.authorization.split(" ")[1]
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    
    if(decoded){
        req.userId = decoded.userId;
        

        next()
    }else{
        res.json({message : "Unauthorized"})
    }
  } catch (error) {
    console.log(error)
    res.send("Error in Authentication")
  }
}

export default auth