const bcrypt = require("bcrypt");
const user =require('../models/UserSchema');
const register = async (req, res) => {
    try {
        let { userid, username, email, password, phoneno, created_at } = req.body;

        // Validation
        if (!userid || !username || !email || !password || !phoneno) {
            return res.status(400).json({
                message: "All fields are mandatory"
            });
        }
        // Hash password
        password = await bcrypt.hash(password, 10);

        const u=new user({userid,username,email,password,phoneno})
        u.save()
        .then((data)=>{
            res.status(200).json({msg:"Data Saved"})
        })

    } catch (error) {
        console.error("Register Error:", error);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password required" });
        }

        // Find user by email
        const x = await user.findOne({ email });

        if (!x) {
            return res.status(400).json({ login: "failed", message: "User not found" });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, x.password);
        console.log("Login attempt:", req.body);
        console.log("User found:", x);
        console.log("Password in DB:", x?.password);
        if (!isMatch) {
            return res.status(400).json({ login: "failed", message: "Invalid password" });
        }

        res.status(200).json({ login: "success" });

    } catch (err) {
        console.error("Login Error:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
const update=async(req,res)=>{
    try{
    const id=req.body.id;
    const newdata={username:"Sana",password:"2134",phoneno:"2143658709"};
    const updatedUser=await user.findByIdAndUpdate(
        id,{$set:newdata},{new:true}
    );
    if(updatedUser){
        res.status(200).json({message:"Data Updated"})
    }
    else{
        res.status(400).json({message:"User not found"});
    }
     }
     catch (err) {
        console.error(" Error:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
const deleteuser=async(req,res)=>{
    try{
          const id=req.body.id;
          const deletedUser=await user.findByIdAndDelete(id)
          if(deletedUser){
            res.status(200).json({message:"Data deleted"})
          }
          else{
            res.status(400).json({message:"User Not Found"});
          }
    }
    catch(err){
          console.error("Error",err);
          res.status(500).json({message:"Internal Server Error"});
    }
};
const find=async(req,res)=>{
    try{
        const findUser=await user.find({});
        if(findUser){
            console.log("Found users:",findUser)
            res.status(200).json({message:"Users Found"});
        }
    }
    catch(error){
        console.error("Error:",error);
        res.status(500).json({message:"Internal Server Error"});
    }
};
module.exports = {register,login,update,deleteuser,find};

