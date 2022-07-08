const express = require('express');
const loginRouter = express.Router();
const admindata = require('../model/adminModel');
const studentdata = require('../model/studentModel');
const user = require('../data/user');

//Redirect to admin login page
loginRouter.get('/admin',(req, res)=>{
    res.render('adminLogin',{});
    user.pop();
});

//Redirect to student login page
loginRouter.get('/',(req, res)=>{
    res.render('studentLogin',{});
    user.pop();
});


//Verification key
var flagadmin = false;
var flagstudent = false;


//Admin verification - check data with DB
loginRouter.get('/adminlogin',(req, res)=>{
    var checkadmin ={
        mail:req.query.adminMail,
        pwd:req.query.adminPwd
    }
    //collect data from DB
    admindata.find()
    .then(function(adminInfo){

        for(var i=0; i<adminInfo.length; i++){
            if(checkadmin.mail==adminInfo[i].email && checkadmin.pwd==adminInfo[i].password){
                flagadmin = true;
                const userdata = JSON.stringify(adminInfo[i]);
                user.push(userdata);
                break;
            }
            else{
                flagadmin = false;
            };
            // console.log(flagadmin);
        }
        // console.log('flag admin '+ flagadmin);
        // console.log('------------------');
        if(flagadmin==true){
            res.redirect('/admin');
        }
        else{
            res.redirect('/login/admin');
        }
    });

});

//Student verification - check data with DB
loginRouter.get('/studentlogin',(req, res)=>{
    var checkuser ={
        name:req.query.studentName,
        dob:req.query.studentdob
    }
    //collect data from DB
    studentdata.find()
    .then(function(studentInfo){

        for(var i=0; i<studentInfo.length; i++){
            if(checkuser.name==studentInfo[i].name && checkuser.dob==studentInfo[i].dob){
                flagstudent = true;
                // console.log('sinfo '+ studentInfo[i]._id);
                const userdata = JSON.stringify(studentInfo[i]);
                user.push(userdata);
                break;
            }
            else{
                flagstudent = false;
            };
        }
        if(flagstudent==true){
            res.redirect('/student');
        }
        else{
            res.redirect('/login');
        }
    });

});


module.exports = loginRouter;