const express = require("express");
const { BugModule } = require("../Models/Bug.Model");
const bugRouter = express.Router();

bugRouter.use(express.json());


bugRouter.get("/bug",async (req,res)=>{
    try{
      let data=await BugModule.find()
      res.send(data)
    }
    catch{
         res.send("err")
    }
})

bugRouter.post("/report", async (req,res)=>{
    let payload=req.body
    try{
        let newBug=new BugModule(payload)
        await newBug.save()
        res.send("success")
    }
    catch{
        res.send("err")
    }
})

bugRouter.delete("/deletbug/:id",async (req,res)=>{
    let id=req.params.id
    try{
       await BugModule.findByIdAndDelete({"_id":id})
       res.send("deleted")
    }
    catch{
      res.send("err")
    }
})

bugRouter.patch("/updatebug/:id",async (req,res)=>{
    let id=req.params.id
    let payload=req.body
    try{
       await BugModule.findByIdAndUpdate({"_id":id},payload)
       res.send("updated")
    }
    catch{
      res.send("err")
    }
})

module.exports = {
    bugRouter
};