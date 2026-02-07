const cancel=require("../models/cancelSchema");

const register=async(req,res)=>{
         try {
                 let {cartid,userid,remarks} = req.body;
                 if (!userid || !cartid || !remarks) {
                     return res.status(400).json({
                         message: "All fields are mandatory"
                     });
                 }
                 const u=new cancel({userid,cartid,remarks})
                 u.save()
                 .then((data)=>{
                     res.status(200).json({msg:"Data Saved"})
                 })
                 
             } catch (error) {
                 console.error(" Error:", error);
                 res.status(500).json({
                     message: "Internal Server Error"
                 });
             }
}
const returnlist=async(req,res)=>{
    try{
    const id=req.body.id;
    const u=await cancel.find({});
            if(u){
                console.log("Found list:",u);
                res.status(200).json({message:"List Found"});
            }
     }
     catch(error){
        if(error){
         console.error("Error:",error);
        res.status(500).json({message:"Internal Server Error"});
        }
     }
}
module.exports={register,returnlist};