const express=require('express');
const router=express.Router();
const {save,find}=require("../controllers/categoryController");
router.post("/save",save);
router.get("/find",find);
module.exports=router;