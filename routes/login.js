const express=require("express");
const router=express.Router();
const login=require("../controllers/login");


router.get("/login",function(req,res){
      res.render("./login")
})
router.post("/login",login)


module.exports=router;