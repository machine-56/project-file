const express = require('express');
const studentRouter = express.Router();
const studentdata = require('../model/studentModel');
const user = require('../data/user');
const requestdata = require('../model/requestModel');

var studentabout = {};
studentRouter.get('/',(req, res)=>{
    // console.log('on student router');
    // console.log(user[0]);
    const studentInfo = JSON.parse(user[0]);  //need
    studentabout = studentInfo;
    // console.log(studentInfo.name);
    // console.log(studentInfo.batch);
    res.render('studentView',{studentInfo});
        

});

studentRouter.get('/request',(req, res)=>{
    res.render('studentRequest',{studentabout});
});

studentRouter.get('/track',(req, res)=>{
    res.render('studentTrack',{studentabout});
});

studentRouter.get('/approved',(req, res)=>{
    res.render('studentApproved',{studentabout});
});

studentRouter.get('/TC',(req, res)=>{
    // console.log('TC applied');
    res.render('studentConformation');
})

studentRouter.post('/applying',(req, res)=>{
    // console.log(studentabout.regno);
    var application = {
        title:'TC',
        id:'/TC/303/22',
        requestedby:studentabout.name,
        department:studentabout.department,
        stage:0,
        status:'pending'
    }
    const form = new requestdata(application);
    form.save();
    res.render('studentConfirmed');
    // console.log(application);
})


module.exports = studentRouter;