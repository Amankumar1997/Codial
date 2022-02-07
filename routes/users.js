const express= require('express');
const router =express.Router();


// acsses user controler
const users_controller=require('../controllers/users_controller');

//map routes with user controller
router.get('/profile',users_controller.profile);
router.get('/sign-up',users_controller.signUp);
router.get('/sign-in',users_controller.signIn);

module.exports=router;