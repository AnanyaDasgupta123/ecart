const cart=require("../models/cartSchema");
const register = async (req, res) => {
    try {
        let {cartid,userid} = req.body;
        if (!userid || !cartid) {
            return res.status(400).json({
                message: "All fields are mandatory"
            });
        }
        const u=new cart({userid,cartid})
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
const find=async(req,res)=>{
    try{
        const id=req.body.id;
        const u=await cart.find({});
        if(u){
            console.log("Found carts:",u);
            res.status(200).json({message:"Carts Found"});
        }
    }
    catch(error){
        console.error("Error:",error);
        res.status(500).json({message:"Internal Server Error"});
    }
};

module.exports={register,find};