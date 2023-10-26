const router = require('express').Router();
const CarController = require('../controllers/car.controller')

router.post('/createCar', CarController.createCar);

router.get('/getUserCarList', CarController.getCarList);

router.post('/deleteCar', CarController.deleteCar);

module.exports = router;