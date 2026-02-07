const express=require('express');
const router=express.Router();
const {register,login,update,deleteuser,find}=require("../controllers/userController");

router.post("/register",register);
router.post("/login",login);
router.put("/updateuser",update);
router.delete("/deleteuser",deleteuser);
router.get("/finduser",find);

module.exports=router;