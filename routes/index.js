const express=require("express");
const signup = require("../controllers/signup");
const router=express.Router();



router.get("/",function(req,res){
    res.render("./homepage");
})

router.use(require("./signup"));
router.use(require("./login"));

module.exports=router;