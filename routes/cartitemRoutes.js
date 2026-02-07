const express=require('express');
const router=express.Router();
const {register,find}=require("../controllers/cartitemController");
router.post("/register",register);
router.get("/find",find);
module.exports=router;