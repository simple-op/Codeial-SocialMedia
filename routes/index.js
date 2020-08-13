const express=require("express");
const router=express.Router();



router.get("/",require("../controllers/home").home)
router.get("/logout",require("../controllers/logout").logout)
router.post("/createPost",require("../controllers/post").post)
router.post("/createComment",require("../controllers/comment").comment)
router.get("/deleteComment",require("../controllers/comment").deleteComment)
router.get("/deletePost",require("../controllers/post").deletePost)
router.get("/profile",require("../controllers/profile").profile)
router.post("/profile/update",require("../controllers/profile").update)




router.use(require("./signup"));
router.use(require("./login"));

module.exports=router; 