const passport=require("passport");
const post=require("../models/post");



module.exports.post=function(req,res){
     
   post.create({
            content:req.body.post,
            user:req.user
        },function(err,post){


            if(err){
                console.log(err);
            }
            res.redirect("/");
        })

   
    


}

module.exports.deletePost=function(req,res){

      
post.findByIdAndDelete(req.query.id,function(err,post){
    if(err)
    console.log(err);
})
 
return res.redirect("/");

}