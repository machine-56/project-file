const express = require('express');
const homeRouter = express.Router();

homeRouter.get('/admin',(req, res)=>{
    res.render('admin',{})
});

homeRouter.get('/student',(req, res)=>{
    res.render('student',{})
});

module.exports = homeRouter;