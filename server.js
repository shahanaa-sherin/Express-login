const express = require('express')
const path = require('path')
const app = express();

const port = process.env.PORT ||8080;

app.set('view engine','ejs')

//load static assests
app.use('/static',express.static(path.join(__dirname,'public')))
app.use('/assets',express.static(path.join(__dirname,'public/assets')))
//home route

app.get('/',(req,res)=>{
    res.render('base',{title:"LOGIN SYSTEM"})
})

app.listen(port,()=>{
    console.log(`listening to the server on http://localhost:8080`);
})