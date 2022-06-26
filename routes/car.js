var express = require('express');
var router = express.Router();

let carController = require('../controllers/car');

// Helper function for guard purposes
function requireAuth(req, res, next)
{
    <form action="action_page.php" method="post">
    <div class="imgcontainer">
      <img src="img_avatar2.png" alt="Avatar" class="avatar">
    </div>
  
    <div class="container">
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required>
  
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>
  
      <button type="submit">Login</button>
      <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me
      </label>
    </div>
  
    <div class="container" style="background-color:#f1f1f1">
      <button type="button" class="cancelbtn">Cancel</button>
      <span class="psw">Forgot <a href="#">password?</a></span>
    </div>
  </form>      

}

/* GET list of items */
router.get('/list', carController.carList);

// Route for Details
router.get('/details/:id', carController.details);

// Routers for edit
router.get('/edit/:id', carController.displayEditPage);
router.post('/edit/:id', carController.processEditPage);


// Delete
router.get('/delete/:id', carController.performDelete);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', carController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', carController.processAddPage);

module.exports = router;