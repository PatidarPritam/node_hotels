const mongoose = require('mongoose');
require('dotenv').config();  

//const mongoURL ='mongodb://localhost:27017/hotels';
//const mongoURL ='mongodb://mongodb+srv://pritam:<MongoAtlas123>@cluster0.wg1t1.mongodb.net/'; //it not work
// const mongoURL ="mongodb+srv://pritam:MongoAtlas123@cluster0.wg1t1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//const  mongoURL =process.env.MONGODB_URL_LOCAL;

const  mongoURL =process.env.MONGODB_URL;


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