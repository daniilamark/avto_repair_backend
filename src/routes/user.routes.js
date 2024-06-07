const router = require('express').Router();
const UserController = require("../controllers/user.controller");

router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
router.get('/getUser', UserController.getUser);
// router.post('/updateUser', UserController.updateUser);

module.exports = router;