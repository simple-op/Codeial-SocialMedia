const mongoose=require("mongoose");
const multer=require("multer");
const path=require("path")
const AVATAR_PATH=path.join("/uploads/users/avatars")


const schema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
     ,
     avatar:{
type:String,


     }

},{
    timestamps:true
})


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path.join(
        __dirname,"..",AVATAR_PATH
      ))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
  let upload = multer({ storage: storage }).single("avatar")

// statics

schema.statics.avatarPath=AVATAR_PATH;
schema.statics.uploadImage=multer({storage:storage}).single("avatar");


const model=mongoose.model("users",schema);

module.exports=model;