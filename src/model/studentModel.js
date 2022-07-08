const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/GPTC',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('DB connected student "custom message"');
});

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name:String,
    regno:String,
    dob:String,
    batch:Number,
    department:String
});

const studentdata = mongoose.model('studentdata',studentSchema);

module.exports = studentdata;