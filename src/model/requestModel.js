const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/GPTC',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('DB connected request "custom message"');
});

const Schema = mongoose.Schema;

const requestSchema = new Schema({
    title:String,
    id:String,
    requestedby:String,
    department:String,
    stage:Number,
    status:String
});

const requestdata = mongoose.model('requestdata',requestSchema);

module.exports = requestdata;