const passport=require("passport")
const post=require("../models/post")
// const user=require("../models/user")


const { populate } = require("../models/post")


module.exports.home=function(req,res){
      
      post.find({}).populate("user").exec(function(err,post)   {  
           return res.render("./homepage",{
               posts:post,

           })
      
        })

}

