const mg=require('mongoose')

mg.connect('mongodb://127.0.0.1:27017/logging',{useCreateIndex:true,useFindAndModify:false,useNewUrlParser:true,useUnifiedTopology:true})


