const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/BedBuddy")
.then(()=>
{
    console.log("mongodb connected")
})
.catch((err)=>
{
    console.log("failed",err)
})


const RegisterSchema = new mongoose.Schema(
    {
        firstname:String,
        lastname:String,
        age:Number,
        gender:String,
        email:String,
        city:String,
        nation:String,
        password:String

    }
)
 

const collection = new mongoose.model("Collecction1",RegisterSchema)

module.exports=collection