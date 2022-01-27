const  express=require('express');
// create a new router object to handle requests.
const router =express.Router();


const homeController=require('../controllers/home_controller');
router.get('/',homeController.home);




// export router 
module.exports = router;