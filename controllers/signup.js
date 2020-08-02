const model=require("../models/user");
const bcrypt=require("bcrypt");

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
    
}
function validatePassword(password) {
    const re = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$/;
    return re.test(password);
    
}



function signup(req,res){
    if(!req.body.password||!req.body.email||!req.body.password||!req.body.re_password){
        res.send("fill everything")
    } 
     
    const email=req.body.email;
    if(!validateEmail(email)){
        res.render("./signup",{
            err:"Enter a valid email"
        })
    }    

    if(req.body.password!=req.body.re_password){
      res.send("password doest match")
    }  

    const password=req.body.password;
    if(!validatePassword(password)){
        res.render("./signup",{
            err:"Password must be valid "
        })
    } 
  
    model.findOne({email:req.body.email},function(err,user){
      if(user){

          res.render("./signup",{
              err:"User Already Exists"
          })

      }

      else{
         
        bcrypt.hash(req.body.password, 10, function(err, hash) {
            model.create({

                email:req.body.email,
                password:hash,
                name:req.body.name
             })
        });
        
        res.render("./login")
          


      }

    })
   
   

}


module.exports=signup;