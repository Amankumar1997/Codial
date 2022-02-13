const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;

const User=require('../models/user');

// Authenticate Using passport 
passport.use(new LocalStrategy({

    usernameField:'email'
    },
   function (email,password,done) // done is here callbackback function
   {
    //   find the user and establish the edentity
    User.findOne({email:email},function(err,user){
        // if there isan error find user
        if(err){console.log('error finding the user---> Passprt'); return done(err)}
        
        // if user is not exist and password is not matched
        if(!user || user.password!=password) 
        {
            console.log("Invalid UserName/Password");
            // user find ya paswrod nahi mila to hum return kr denge false  
            return done(null,false);
        }
        //  if user is find and passwor dis match
        return done(null,user);
    })
   }

  ));


  // serieizing the user to decide which keyis kept in the cookies
  passport.serializeUser(function(user,done){
      done(null,user.id);
  });

  //deserializing the user fromethe key in the cookies  
  passport.deserializeUser(function(id,done){
   User.findById(id,function(err,user){
       if(err){
           console.log('Error in finding user -->passport');
           return done(err);
       }
       return done(null,user);

   })
  })

  module.exports=passport;