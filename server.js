const express=require('express')
const app=express() //contain all the functionality provided by express moduel
app.use(function date(req,res,next){
    let requestAt= new Date()
    console.log(requestAt)
    if(requestAt.getHours()>=17 || requestAt.getHours()<=8)
    {
        console.log("Our office is not open now")
        res.sendFile(__dirname+'/pages/out.html')

    }
    next()
    },express.static(__dirname + '/pages'))
    
    
    // app.get('/home', (req,res)=>{
    
    //     res.sendFile(__dirname+'/pages/home.html')

    // })

    // app.get('/courses', (req,res)=>{
    
    //     res.sendFile(__dirname+'/pages/courses.html')

    // })
    // app.get('/contact', (req,res)=>{
    
    //     res.sendFile(__dirname+'/pages/contact.html')

    // })

    
app.listen(3000, (err)=> {
    if(err) console.log('error occured')
    else console.log("server is running on 3000 port ")
})
