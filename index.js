const express=require('express')
const mongoose=require('mongoose')
var routers=require('./routes/routes');
const bodyParser = require("body-parser")
const app=express()
const port=5000
const mongoDataBaseURL="mongodb+srv://afifimajd383:mongo@123@cluster0.tcbdpqv.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoDataBaseURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true

});
const connection=mongoose.connection 
app.listen(port,()=>{
    console.log("Server is running port" +port);
})
connection.once("open",()=>{
    console.log("MongoDb Connected!!!......")
});

app.use(bodyParser.json());
app.use(routers);