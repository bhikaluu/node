const express = require('express');

const hbs =require('hbs');

const app = express();

const port = process.env.PORT||3000;

hbs.registerPartials(__dirname+'/views/partials');

hbs.registerHelper('date',()=>{
  return new Date().getFullYear();
})

hbs.registerHelper('big',(text)=>{
  return text.toUpperCase();
})


app.set('view engine','hbs');

app.use((req,res,next)=>{

  var now = new Date().toString();

  var log=`${req.method} ${req.url} ${now} `
  console.log(log);
  next();
})

app.use((req,res,next)=>{
  res.render('maintence.hbs');
})

app.use(express.static(__dirname+'/Playground'));


app.get('/',(req,res)=>{
  res.render('about.hbs',{
    welcomemessage:'This is welcome meeage bro'
  })
})

app.get('/help',(req,res)=>{
  res.render('help.hbs');
})

app.get('/helper',(req,res)=>{
  res.send('helper.html');
})

app.listen(port,()=>{
  console.log('port 3000');
})
