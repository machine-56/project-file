const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/GPTC',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('DB connected admin "custom message"');
});

const Schema = mongoose.Schema;

const adminSchema = new Schema({
    name:String,
    email:String,
    password:String,
    department:String,
    position:String
});

const admindata = mongoose.model('admindata',adminSchema);

module.exports = admindata;