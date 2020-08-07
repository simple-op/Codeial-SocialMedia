const passport=require("passport")
const Posts=require("../models/post")
// const user=require("../models/user")


const { populate } = require("../models/post")
const { comment } = require("./comment")


module.exports.home=async function(req,res){
     
   
        
        let posts=await Posts.find({}).populate("user").populate({path:"comments",
        populate:{
            path:"user"
        }
                            
})  
           
            
           
           return res.render("./homepage",{
               posts:posts,
               

           })
      
        

}

