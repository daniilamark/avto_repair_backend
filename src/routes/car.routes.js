const router = require('express').Router();
const CarController = require('../controllers/car.controller')

router.post('/createCar', CarController.createCar);
router.put('/updateCar/:carId', CarController.updateCar);
router.get('/getUserCarsList', CarController.getUserCarsList);
router.post('/deleteCar', CarController.deleteCar);

module.exports = router;