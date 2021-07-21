const mg=require('mongoose')

const userschema=new mg.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    email_id:{
        type:String,
        required:true,
        unique:true
    },
    sex:{
        type:String
    },
    age:{
        type:Number
    }
})



const user=mg.model('user',userschema)

module.exports=user