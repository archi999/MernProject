const mongoose = require("mongoose");

mongoose.set('strictQuery', false);


mongoose.connect("mongodb+srv://archiagrawal9808:XHvVCica7p4hexCJ@cluster0.afzajas.mongodb.net/BlogApp").then(()=>{
    console.log("connected!");
}).catch((err)=>{
    console.log(err);
})