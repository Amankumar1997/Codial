const express= require('express');
const router =express.Router();


// acsses user controler
const users_controller=require('../controllers/users_controller');

//map routes with user controller
router.get('/profile',users_controller.profile);


module.exports=router;