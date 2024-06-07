const CarService = require('../services/car.service');

exports.createCar =  async (req, res, next)=>{
    try {
        const { userId, brand, model, mileage, yearIssue, typeFuel, 
                volumeTank, number, vin, carBody, transmission, engineVolume, enginePower } = req.body;
        let carData = await CarService.createCar(userId, brand, model, mileage, yearIssue, typeFuel, 
                            volumeTank, number, vin, carBody, transmission, engineVolume, enginePower);
        res.json({status: true, success:carData});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}

// exports.updateCar =  async (req, res, next)=>{
//     try {
        

//         const { _id, userId, brand, model, mileage, yearIssue, typeFuel, 
//                 volumeTank, number, vin, carBody, transmission, engineVolume, enginePower } = req.body;
                
//         let carData = await CarService.updateCar(_id, userId, brand, model, mileage, yearIssue, typeFuel, 
//                             volumeTank, number, vin, carBody, transmission, engineVolume, enginePower);
//         res.json({status: true, success:carData});
//     } catch (error) {
//         console.log(error, 'err---->');
//         next(error);
//     }
// }

// controller
exports.updateCar = async (req, res, next) => {
    try {
        const carId = req.params.carId; // предполагая, что carId передается в URL
        const updateData = req.body; // данные для обновления
        let updatedCar = await CarService.updateCar(carId, updateData);
        res.json({ status: true, success: updatedCar });
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}


exports.getUserCarsList =  async (req, res, next)=>{
    try {
        const { userId } = req.body;
        let carData = await CarService.getUserCarsList(userId);
        
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
        res.json({status: true, success:deletedCar});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}