const mongoose = require('mongoose');

const mongoURL ='mongodb://localhost:27017/hotels';

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,

})

const db = mongoose.connection;

 // define event listeneres for database connection
db.on('connected',()=>{
    console.log('connected to mongodb server successfully');
});

db.on('error',(err)=>{
    console.log('error connecting to mongodb server',err);
});

db.on('disconnected',()=>{
    console.log('Mongodb disconnected');
});

module.exports = db;