const cartitem=require("../models/cartItemSchema");
const register = async (req, res) => {
    try {
        let {cartitemid,cartid,productid,quantity} = req.body;
        if (!cartitemid || !cartid || !productid || !quantity) {
            return res.status(400).json({
                message: "All fields are mandatory"
            });
        }
        const u=new cartitem({cartitemid,cartid,productid,quantity})
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
};

const find=async(req,res)=>{
    try{
        const id=req.body.id;
        const u=await cartitem.find({});
        if(u){
            console.log("Found cartitems:",u);
            res.status(200).json({message:"Cartitems Found"})
        }
    }
    catch(error){
        console.error("Error:",error);
        res.status(500).json({message:"Internal Server Error"});
    }
};

module.exports={register,find};