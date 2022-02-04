// start express
const express=require('express');
const app=express();
const port =8000;


// require layout
const expressLayouts=require('express-ejs-layouts');

// reqiure mogoose
const db=require('./config/mongoose');

app.use(expressLayouts);
// set up static fles 
app.use(express.static('./assets'));
// extract styles and scripts from the sub pages into layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);



// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views','./views')


// use express router koi bhi request ayegi is routs pe requre ho jayegi
app.use('/',require('./routes'))


// app islistening at prt no. 8000
app.listen(port,(err)=>{

    if(err)
    {
        console.log(`there will error on server listen${err}`);
    }
    console.log(`server ruuniing on prot no${port}`);
   
})