const express=require('express');
const router=express.Router();
const {register,find}=require("../controllers/cartContoller");
router.post("/register",register);
router.get("/find",find);
module.exports=router;