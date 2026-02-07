const category=require('../models/categorySchema');
const save=async(req,res)=>{
     try{
        let{categoryid,categoryname}=req.body;
        if(!categoryid || !categoryname){
             return res.status(400).json({
                message: "All fields are mandatory"
            });
        }
        const x=new category({categoryid,categoryname})
        x.save()
        .then((data)=>{
            res.status(200).json({message:"Data Saved"})
        })
     }
     catch(error){
        console.log("Error:",error)
        res.status(500).json({message:"Internal Server Error"});
     }
}
const find=async(req,res)=>{
   try{
      const findCategory=await category.find({});
              if(findCategory){
                  console.log("Found catagories:",findCategory)
                  res.status(200).json(findCategory);
              }

   }
   catch(error){
      console.error("Error:",error)
      res.status(500).json({message:"Internal server Error"});
   }
}
module.exports={save,find};