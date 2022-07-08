const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');

const adminRouter = require('./src/routes/adminRouter');
const formRouter = require('./src/routes/formRouter');
const loginRouter = require('./src/routes/loginRouter');
const studentRouter = require('./src/routes/studentsRouter');

const app = new express;

app.set('views','./src/views');
app.set('view engine','ejs');

app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public')));

app.use('/admin',adminRouter);
app.use('/form',formRouter);
app.use('/login',loginRouter);
app.use('/student',studentRouter);

app.get('/',(req, res) => {

    res.render('index',{});
});

const PORT = process.env.port || 1159;
app.listen(PORT,()=>{
    console.log(`app reaady on port : ${PORT}`);
});