const express=require('express');

module.exports.profile=function(req,res)
{
    return res.render('user_profile',{});
}
// rendering on sign up page
module.exports.signIn=function(req,res)
{
    return res.render('user_sign_in',{});
}
// rendering on sign up page
module.exports.signUp=function(req,res)
{
    return res.render('user_sign_up',{});
}