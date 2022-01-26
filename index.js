// start express
const express=require('express');
const app=express();

const port =8000;

// app islistening at prt no. 8000
app.listen(port,(err)=>{

    if(err)
    {
        console.log(`there will error on server listen${err}`);
    }
    console.log(`server ruuniing on prot no${port}`);
   
})