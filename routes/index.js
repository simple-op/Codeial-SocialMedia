const express=require("express");
const router=express.Router();



router.get("/",require("../controllers/home").home)
router.get("/logout",require("../controllers/logout").logout)

router.use(require("./signup"));
router.use(require("./login"));

module.exports=router;