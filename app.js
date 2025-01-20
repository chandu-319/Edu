const express=require("express");
const app=express();
const path=require("path");
const port=5500;

app.set("view engine","ejs");

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get(("/form"),(req, res)=>{
    res.render("form.ejs");

});
app.get(("/thankyou"),(req,res)=>{
    res.render("thankyou.ejs");
});

app.get("/",(req,res)=>{
    res.render("index.ejs")
});
// ,{root:__dirname}

app.listen(port,()=>{
    console.log("App is listining on port 5500");
});