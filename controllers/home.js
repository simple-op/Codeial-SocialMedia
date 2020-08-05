const passport=require("passport")
const posts=require("../models/post")
// const user=require("../models/user")


const { populate } = require("../models/post")
const { comment } = require("./comment")


module.exports.home=function(req,res){
     
   
        
        posts.find({}).populate("user").populate({path:"comments",
        populate:{
            path:"user"
        }
                            
}).exec(function(err,post)   {  
           
            
           
           return res.render("./homepage",{
               posts:post,
               

           })
      
        })

}

