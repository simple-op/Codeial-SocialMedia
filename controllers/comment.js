const passport=require("passport");
const comment=require("../models/comment");
const post=require("../models/post");






module.exports.comment=function(req,res){
    
   if(req.body.comment===""){
      
       return res.redirect("/")
   }
    else{   
   comment.create({
            content:req.body.comment,
            user:req.user,
            post:req.body.post,
            
        },function(err,commentCreated){
           

            if(err){
                console.log(err);
            }
            else{

              
   post.findByIdAndUpdate({_id:req.body.post},{$addToSet:{comments:commentCreated._id}},function(err,post){
       if(err)
       console.log(err);
            
           
}) 


            res.redirect("/");}
        })}

   
    


}