    const express = require('express');
const { postTodo, updateTodo, deleteTodo, getTodo } = require('../controllers/todoController');
               const router = express.Router();
//const getUserData =require("../controllers/userController");

//router.get("/home",getUserData);
router.post('/posttodo/:todo',postTodo);
    router.put('/updatetodo/:id/:updatetodo',updateTodo  );
    router.delete('/deletetodo/:id',deleteTodo);
    router.get('/gettodo',getTodo);
module.exports=router