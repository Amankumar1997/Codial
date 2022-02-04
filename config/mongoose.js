const mongoose=require('mongoose');
// provide connexttion to the database
mongoose.connect('mongodb://localhost/codeial_development');
const db=mongoose.connection;
// error
db.on('error',console.error.bind(console,"Error connecting to databse"));

//when connection i s open
db.once('open',function(){
    console.log('conntected is database:: mongodb');
});

module.exports=db;