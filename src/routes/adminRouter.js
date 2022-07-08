const express = require('express');
const adminRouter = express.Router();
const studentdata = require('../model/studentModel');
const admindata = require('../model/adminModel');
const user = require('../data/user');

var adminabout = {};
adminRouter.get('/',(req, res)=>{
    // console.log('on admin router');
    const adminInfo = JSON.parse(user[0]);  //need
    adminabout = adminInfo;
    res.render('adminView',{adminabout});
        

});

adminRouter.get('/addstud',(req, res)=>{
    res.render('addStudent');
})

adminRouter.get('/addadmin',(req, res)=>{
    res.render('addAdmin');
})

adminRouter.post('/addstudent',(req, res)=>{
    var student={
        name:req.body.name,
        regno:req.body.regno,
        dob:req.body.dob,
        batch:req.body.batch,
        department:req.body.department
    }
    const data = new studentdata(student);
    data.save();
    res.redirect('/admin');
})

adminRouter.post('/adminadd',(req, res)=>{
    var student={
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        department:req.body.department,
        position:req.body.position
    }
    const data = new admindata(student);
    data.save();
    res.redirect('/admin');
})

adminRouter.get('/approve',(req, res)=>{
    res.render('adminApprove',{adminabout});
});


module.exports = adminRouter;
