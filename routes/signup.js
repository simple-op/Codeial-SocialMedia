const express=require("express");
const router=express.Router();
const signup=require("../controllers/signup");


router.get("/signup",function(req,res){
      res.render("./signup")
})
router.post("/signup",signup)


module.exports=router; 