const router = require('express').Router();
const UserController = require("../controllers/user.controller");

router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
//router.post('/updateUser', UserController.updateUser);

module.exports = router;