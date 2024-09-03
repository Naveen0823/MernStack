var express = require("express")
var app = express();
app.use(express.json());
app.get("/myname",(req,res)=>{
    res.json({"msg":"Naveen"});
});
app.listen(8080,()=>{
    console.log("server started")
})

app.post("/myname",(req,res)=>{
    res.json({"msg":"Naveen KM"});
});

///app.post("/register",(req,res)=>{
   /// let {email,pwd} = req['query'];
    
////if(email == 'admin@gmail.com' && pwd == 'admin'){
  ///  res.json({"msg":"you are crct"})
///}else{
   /// res.json({"msg":"you are wrong"})

     ///console.log(email,pwd)
    ///res.json({"msg":email});
//}
   
//});

app.post("/register",(req,res)=>{
    let {name,email,password,address} = req.body;
if(!name || !email || !password || !address){
    res.json({msg:"fill details"})
}else{
    res.json({msg:"registerd successfully"})
}  
});



