const mongoose=require("mongoose");


const schema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
        
        
    }
    
     

},{
    timestamps:true
})


const postModel=mongoose.model("post",schema);

module.exports=postModel;