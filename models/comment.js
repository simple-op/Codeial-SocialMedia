const mongoose=require("mongoose");


const schema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
        
        
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"

    }
    
     

},{
    timestamps:true
})


const commentModel=mongoose.model("comment",schema);

module.exports=commentModel;