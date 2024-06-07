// const { deleteToDo } = require("../controllers/car.controller");
const CarModel = require("../models/car.model");

class CarService{
    static async createCar(userId, brand, model, mileage, yearIssue, typeFuel, volumeTank, number, vin, carBody, transmission, engineVolume, enginePower){
        const createCar = new CarModel({userId, brand, model, mileage, yearIssue, typeFuel, volumeTank, number, vin, carBody, transmission, engineVolume, enginePower});
        return await createCar.save();
    }

    // static async updateCar(_id, userId, brand, model, mileage, yearIssue, typeFuel, volumeTank, number, vin, carBody, transmission, engineVolume, enginePower){
    //     // const updateCar = new CarModel({_id, userId, brand, model, mileage, yearIssue, typeFuel, volumeTank, number, vin, carBody, transmission, engineVolume, enginePower});
    //     const carById = await CarModel.findOneAndUpdate({_id:_id},{userId:userId},{brand:brand},{model:model},{mileage:mileage}
    //         ,{yearIssue:yearIssue},{typeFuel:typeFuel},{volumeTank:volumeTank},{number:number}
    //         ,{vin:vin},{carBody:carBody},{transmission:transmission},{engineVolume:engineVolume},{enginePower:enginePower}
    //     );
    //     // CarModel.updateOne
    //     console.log( 'update');
    //     console.log( carById);
    //     // print('carById');
    //      return await carById.save;
    // }

    // service
    static async updateCar(carId, updateData) {
        const data = await CarModel.findOneAndUpdate({_id: carId}, updateData, { new: true });
        return data;
    }
    static async getUserCarsList(userId){
        const carList = await CarModel.find({userId})
        return carList;
    }

   static async deleteCar(id){
        const deleted = await CarModel.findByIdAndDelete({_id:id})
        return deleted;
   }
}

module.exports = CarService;