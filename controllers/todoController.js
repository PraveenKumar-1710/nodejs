const Todo = require("../models/TodoSchema");

const postTodo = async(req,res)=>{
    try{
        console.log(req.params.todo);
         const success = await Todo.create({todo:req.params.todo})
         if(success){
            res.status(200).send({"message":"Todo craeted..."})
         }
         res.status(400).send({"message":"Todo not craeted..."})
    }catch(e){
        console.log(e);
    }
}
const updateTodo = async(req,res)=>{
    try{
        console.log(req.params.updateTodo);
         const success = await Todo.findByIdAndUpdate(req.params.id,{todo:req.params.updatetodo})
         if(success){
            res.status(200).send({"message":"Todo updated..."})
         }
         res.status(400).send({"message":"Todo not updated..."})
    }catch(e){
        console.log(e);
    }
}
const deleteTodo = async(req,res)=>{
    try{
        console.log(req.params.id);
         const success = await Todo.findByIdAndDelete(req.params.id)
         if(success){
            res.status(200).send({"message":"Todo Deleted..."})
         }
         res.status(400).send({"message":"Todo not Deleted..."})
    }catch(e){
        console.log(e);
    }
}

const getTodo = async(req,res)=>{
    try{
         
         const success = await Todo.find()
         if(success){
            res.status(200).send({success,"message":"Todo Get..."})
         }
         res.status(400).send({"message":"Todo not Get..."})
    }catch(e){
        console.log(e);
    }
}

module.exports={postTodo,updateTodo,deleteTodo,getTodo}