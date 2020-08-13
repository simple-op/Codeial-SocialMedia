
const model=require("../models/user");
const { fileLoader } = require("ejs");

// User=require()

module.exports.profile=function(req,res){
   

  res.render("profile.ejs",{
       
     user:req.user,
     profileId:req.query.id
     


  }) 

}


module.exports.update=  function(req,res){

        if(req.user.id===req.query.profileId){

            model.findById(req.user.id,function(err,user){
                  console.log(user)
                if(user){
                model.uploadImage(req,res,function(){
                    console.log(req.body.name)
            
                    model.findByIdAndUpdate(req.user.id,{
        
                        avatar:model.avatarPath+"/"+req.file.filename,
                        name:req.body.name,
                        emai:req.body.email
                
                          
                   },function(err,user){
                        

                     res.locals.user=user;
                   })
        
                
        
                
            })
        }

            })

            
        }
    
            
        
    
  res.redirect("back"); 
}  