const CarService = require('../services/car.service');

exports.createCar =  async (req, res, next)=>{
    try {
        const { userId, name, model } = req.body;
        let carData = await CarService.createCar(userId, name, model);
        res.json({status: true, success:carData});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}

exports.getCarList =  async (req, res, next)=>{
    try {
        const { userId } = req.body;
        let carData = await CarService.getUserCarList(userId);
        res.json({status: true, success:carData});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}

exports.deleteCar =  async (req, res, next)=>{
    try {
        const { id } = req.body;
        let deletedCar = await CarService.deleteCar(id);
        res.json({status: true, success:deletedcar});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}