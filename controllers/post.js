const passport=require("passport");
const post=require("../models/post");
const comment=require("../models/comment")




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

    for(comments of post.comments){

        comment.findByIdAndDelete(comments,function(err,comments){
            if(err)
            console.log(err);

        })

    }
    if(err)
    console.log(err);
})
 
return res.redirect("/");

}