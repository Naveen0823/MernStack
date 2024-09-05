var express = require("express")
var app = express();
app.use(express.json());
app.get("/myname",(req,res)=>{
    res.json({"msg":"Naveen"});
});


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

var {MongoClient} = require('mongodb');

const Database_Name ="office"
const MONGO_url = 'mongodb_url';
const client = new MongoClient('mongodb+srv://naveennaveen081426:NAVEEN2002@cluster0.e8z0f.mongodb.net/');

app.post("/createEmployee",async(req,res)=>{
    let {name,email,password,mobile_no} = req.body;
    let data = {
        'name': 'Naveen',
        'email': 'Naveen@gmail',
        'password':'Text',
        'mobile_no':'987645466'

    }
    await client.connect();
    let db = client.db(Database_Name);
     await db.collection("employee").insertOne(data);
     res.status(200).json({"message":"employee created!!"})
});



app.get("/createEmployee",async(req,res)=>{
    await client.connect();
    let db = client.db("Office");
    let list = await db.collection("employee").find({}).toArray();
    res.status(200).json(list)
});




app.get("/listempbyname/:name",async(req,res)=>{
    await client.connect();
    let {name} = req.params;
    let db = client.db("office");
    let list = await db.collection("employee").find({"name":name}).toArray();
    res.status(200).json(list)
});


app.post("/loginn",async(req,res)=>{
    await client.connect();
    let {name,password} = req.body;
    let db = client.db("office");
    let list = await db.collection("employee").find({"name":name,"password":password}).toArray();
    if(list.length>0){
        res.json({"msg":"you are correct"})
    }else{
        res.status(400).json({"msg":"you are wrong"})

    }
    
});

app.listen(8080,()=>{
    console.log("server started")
});



