const  express=require('express');
// create a new router object to handle requests.
const router =express.Router();


const homeController=require('../controllers/home_controller');

// this routes control all other  routes
router.get('/',homeController.home);


router.use('/users',require('./users'));
 




// export router 
module.exports = router;