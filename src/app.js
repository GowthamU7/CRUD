const exp=require('express')
const app=exp()
const http=require('http')
const pt=require('path')
const { findById } = require('../model/user_model')
require('../mongo_boy/mongoose')
const hbs=require('hbs')
const user=require('../model/user_model')
const port=process.env.PORT || 3000
const pub=pt.join(__dirname,'../public')
const part=pt.join(__dirname,'../partials')
app.use(exp.json())
app.set('view engine','hbs')
app.use(exp.urlencoded({extended:true}))
app.use(exp.static(pub))
hbs.registerPartials(part)

app.post('/new_user', async(req,res)=>{
    try{
        const us=new user({...req.body})
        await us.save()
        res.redirect('/')
    }catch(e){
        res.send('user already exists.. <a href="/new_user">try_again</a>')
    }
    
})


app.get('', async(req,res)=>{
    try{
        res.render('index',{ass:"ADD USER",u:"/new_user"})
    }
    catch(e){
        res.send('404')
    }


})


app.get('/data_of_the_employees',async(req,res)=>{
    const data=await user.find({})
    res.json(data)
})

app.get('/new_user',(req,res)=>{
    res.render('new_use',{ass:"DELETE USER",u:"/"})
})


app.get('/user/:id', async(req,res)=>{
    const data =await user.findOne({_id:req.params.id})
    var name=data.name
    var email_id=data.email_id
    var age=data.age
    var sex=data.sex
    res.render('edit',{name,email_id,age,sex,ass:"DELETE_USER",u:"/new_user"})
})


app.post('/user/:id',async (req,res)=>{
        try{
        await user.findByIdAndUpdate({_id:req.params.id},{...req.body})
        res.redirect('/')
        }
        catch(e){
            const data =await user.findOne({_id:req.params.id})
            var name=data.name
            var email_id=data.email_id
            var age=data.age
            var sex=data.sex
            res.render('edit',{name,email_id,age,sex,error:'Credentilas were aleardy in use',ass:"DELETE USER",u:"/new_user"})
        }
})

app.get('/del_user/:id',async(req,res)=>{
    try{
    await user.findByIdAndDelete({_id:req.params.id})
    res.redirect('/')
    }catch(e){
        console.log(e)
    }
})


const server=http.createServer(app)


server.listen(port,()=>{
    console.log('listening on port....',port)
})