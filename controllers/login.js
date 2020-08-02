const model=require("../models/user");
const bcrypt=require("bcrypt");

function login(req,res){
 
   if(req.body.email&&req.body.password){

      model.findOne({email:req.body.email},function(err,user){
         
        if(!user){
          console.log("user not found");
          res.render("./login",{
              err:"User does'nt exist"
          });
        }
        else{
            bcrypt.compare(req.body.password,user.password, function(err, result) {
                if(result){
                   
                     
                    res.render("./homepage",{
                        username:user.name
                    })
        
                  }
                  else{
                    res.render("./login",{
                        err:"Wrong Password"
                    });

                  }
            });

          



        }

        
      })

   }





}


module.exports=login;