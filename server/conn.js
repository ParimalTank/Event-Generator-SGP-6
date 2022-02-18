const mongoose = require('mongoose')
const uri = 'mongodb+srv://root:*****@cluster0.ynn4a.mongodb.net/EventDatabase?authSource=admin&replicaSet=atlas-7kvhmc-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true';
const client = mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const dbObj = mongoose.connection

dbObj.on('connected', () => {
    console.log('MongoDB Connection Successfull');
})
dbObj.on('error', () => {
    console.log('MongoDB Connection Failed');
})

module.exports = mongoose