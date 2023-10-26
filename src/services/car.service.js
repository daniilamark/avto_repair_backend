const { deleteToDo } = require("../controllers/car.controller");
const CarModel = require("../models/car.model");

class CarService{
    static async createCar(userId, name, model){
        const createCar = new CarModel({userId, name, model});
        return await createCar.save();
    }

    static async getUserCarList(userId){
        const carList = await CarModel.find({userId})
        return carList;
    }

   static async deleteCar(id){
        const deleted = await CarModel.findByIdAndDelete({_id:id})
        return deleted;
   }
}

module.exports = CarService;