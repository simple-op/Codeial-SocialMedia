const passport=require("passport");
const post=require("../models/post");
const comment=require("../models/comment")




module.exports.post=function(req,res){

   if(req.user){  
   post.create({
            content:req.body.post,
            user:req.user
        },function(err,post){


            if(err){
                console.log(err);
            }
             if(req.xhr){
                 return res.status(200).json({
                  data:{
                      posts:post
                  },
                  message:"Post Created!"

               

                 })
             }

            res.redirect("/");
        })

   
    


}}

module.exports.deletePost=function(req,res){

post.findById(req.query.id,function(err,postFound){
 if(err)
 console.log(err)
      
else if((postFound!=null)&&postFound.user.equals(req.user._id)){     
post.findByIdAndDelete(req.query.id,function(err,post){

    for(comments of post.comments){

        comment.findByIdAndDelete(comments,function(err,comments){
            if(err)
            console.log(err);

        })

    }
    if(err)
    console.log(err);
    
    

})}

if(req.xhr&&postFound){
    return res.status(200).json({
     data:{
         post_id:postFound._id
     },
     message:"Post Deleted!"

  

    })
}

return res.redirect("/")
})
 




}