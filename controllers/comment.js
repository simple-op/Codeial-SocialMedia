const passport=require("passport");
const comment=require("../models/comment");
const post=require("../models/post");

module.exports.comment=function(req,res){
    
   if(req.user==undefined||req.body.comment===""){
      
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


module.exports.deleteComment=function(req,res){
      
      post.findById(req.query.postId,function(err,postFound){
          
            comment.findById(req.query.id,function(err,commentFound){
               

            if(postFound!=null&&((postFound.user.equals(req.user._id))||(req.user._id.equals(commentFound.user)))){    
            comment.findOneAndDelete({_id:req.query.id},function(err,comment){
            
            if(err)
            console.log(err);
            else{
                   post.findByIdAndUpdate(req.query.postId,{$pull:{comments:req.query.id}},function(err,post){
             if(err)
                console.log(err);
                    
                   
                    
               })

        }
        return res.redirect("/");    

      })
        }
    })})


}