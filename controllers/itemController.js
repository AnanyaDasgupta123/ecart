const item =require('../models/itemSchema');
const save = async (req, res) => {
    try {
        let {productid,productname,description,price,stock,image,categoryid} = req.body;
        if (!productid || !productname || !description || !price || !stock || !image || !categoryid) {
            return res.status(400).json({
                message: "All fields are mandatory"
            });
        }
        const u=new item({productid,productname,description,price,stock,image,categoryid})
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

const update=async(req,res)=>{
    try{
        const id=req.body.id;
        const newdata={price:"68000",stock:"5"};
         const updatedItem=await item.findByIdAndUpdate(id,{$set:newdata},{new:true});
             if(updatedItem){
                 res.status(200).json({message:"Data Updated"})
             }
             else{
                 res.status(400).json({message:"Item not found"});
             }
              }
    catch(error){
        console.error("Error",error);
        res.status(500).json({message:"Internal Server Error"});
    }
};

const deleteitem=async(req,res)=>{
    try{
          const id=req.body.id;
          const deletedItem=await item.findByIdAndDelete(id)
          if(deletedItem){
            res.status(200).json({message:"Data deleted"})
          }
          else{
            res.status(400).json({message:"Item Not Found"});
          }
    }
    catch(err){
          console.error("Error",err);
          res.status(500).json({message:"Internal Server Error"});
    }
};

const search=async(req,res)=>{
    try{
        const categoryid=req.body.categoryid;
        const findById=await item.find({categoryid});
        if(findById){
            console.log("Found item:",findById)
            res.status(200).json({message:"Items Found"});
        }
    }
    catch(error){
        console.error("Error:",error);
         res.status(500).json({message:"Internal Server Error"});
    }
};

const find=async(req,res)=>{
    try{
        const findItems=await item.find({});
        if(findItems){
            console.log("Found items:",findItems)
            res.status(200).json(findItems);
        }
    }
    catch(error){
        console.error("Error:",error);
        res.status(500).json({message:"Internal Server Error"});
    }
};

module.exports={save,deleteitem,find,update,search};

