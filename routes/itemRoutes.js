const express=require('express');
const router=express.Router();
const {save,find,deleteitem,update,search}=require("../controllers/itemController");
router.post("/save",save);
router.delete("/deleteitem",deleteitem)
router.put("/update",update);
router.get("/find",find);
router.get("/search",search);
module.exports=router;