const passport=require("passport");
const comment=require("../models/comment");
const post=require("../models/post");

module.exports.comment=async function(req,res){
    
   if(req.user==undefined||req.body.comment===""){
      
       return res.redirect("/")
   }
    else{    
   let commentCreated=await  comment.create({
            content:req.body.comment,
            user:req.user,
            post:req.body.post,
            
        })


              
   post.findByIdAndUpdate({_id:req.body.post},{$addToSet:{comments:commentCreated._id}},function(err,post){
       if(err)
       console.log(err);
            
           
})        
            if(req.xhr){
             return res.status(200).json({
               data:{
                    content:req.body.comment,

                    user:req.user,
                    post:req.body.post,
                    id:commentCreated._id

               }
                 

             })
           

            }
           
            res.redirect("/");} 
        }

   
    





module.exports.deleteComment=function(req,res){
      
      post.findById(req.query.postId,function(err,postFound){
          
            comment.findById(req.query.id,function(err,commentFound){
               

            if(commentFound!=null&&postFound!=null&&((postFound.user.equals(req.user._id))||(req.user._id.equals(commentFound.user)))){    
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