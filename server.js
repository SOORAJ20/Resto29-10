const express=require('express');
const app=express();
const mongoose=require('mongoose');
const path=require('path');
const bodyParser=require('body-parser');
const cors=require('cors');




const port=3000;

const db="mongodb+srv://videoDbUser:Nandhu20@cluster0.gdyzs.mongodb.net/resto?retryWrites=true&w=majority"
mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true },function(err) {
    if(err){
        console.error("Error! "+err);
    }else{
        console.log("connection to db: success!");
    }
})


app.use(express.static(path.join(__dirname,'dist/NewResto')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
//app.use(exprss.json())
const restoRoutes=require('./server/routes/restoapi')
app.use('/api/resto',restoRoutes)
const userRoutes=require('./server/routes/userapi')
app.use('/api/user',userRoutes)

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/NewResto/index.html'));
})
app.listen(port,function(){
    console.log("server running on local host: "+port);
})