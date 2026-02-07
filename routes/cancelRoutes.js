const express=require('express');
const router=express.Router();
const {register,returnlist}=require("../controllers/cancelController");
router.post("/register",register);
router.get("/returnlist",returnlist)
module.exports=router;