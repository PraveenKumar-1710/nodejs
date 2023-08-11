const mongoose = require('mongoose');
const database=async()=>{
  try{
     mongoose.connect("mongodb+srv://praveen:LjWUjJLc54AfdTse@cluster0.95evz0o.mongodb.net/?retryWrites=true&w=majority",{
        useNewUrlParser:true,
        useUnifiedTopology:true
     }).then(()=>console.log("database connected...")).catch((err)=>{console.log(err);})
  }catch (err){
    console.log(err);
  }
}

module.exports=database;