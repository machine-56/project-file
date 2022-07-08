const express = require('express');
const formRouter = express.Router();
const admindata = require('../model/adminModel');
const studentdata = require('../model/studentModel');
const requestdata = require('../model/requestModel');
const mongoose = require('mongoose');
const user = require('../data/user');
const requests = require('../data/request');


var info=[];
formRouter.get('/',(req, res)=>{
    const userInfo = JSON.parse(user[0]);
    const dpt =userInfo.department;
    while(info.length>0){
        info.pop();
        console.log(info);
    }
    requestdata.find()
    .then(function(reqdata){
        for(let i=0;i<=requestdata.length;i++){
         const string = JSON.stringify(reqdata[i]);
         requests.push(string);
         const parsed = JSON.parse(requests[i]);
         if(parsed.department===dpt && parsed.stage === 0){
             info.push(parsed);
            }
        }
        console.log('new array');
        console.log(info);
        res.render('adminForm',{info});
    })
})

formRouter.get('/green/:id',(req, res)=>{
    const id = req.params.id;
    console.log(id);
    requestdata.findOne({ _id: id })
    .then(function (reqInfo){
        reqInfo.stage=1;
        reqInfo.save();
        res.redirect('/admin');
    })
})

formRouter.get('/red/:id',(req, res)=>{
    const id = req.params.id;
    console.log(id);
    requestdata.findOne({ _id: id })
    .then(function (reqInfo){
        reqInfo.stage=-1;
        reqInfo.save();
        res.redirect('/admin');
    })
})

formRouter.get('/view',(req, res)=>{
    res.render('adminSingleForm')
})



module.exports = formRouter;