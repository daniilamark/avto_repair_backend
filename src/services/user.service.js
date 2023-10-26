const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

class UserServices{
 
    static async registerUser(name, last_name, email, password){
        try{
                console.log("-----name --- last_name-----Email --- Password-----", name, last_name, email, password);
                
                const createUser = new UserModel({name, last_name, email, password});
                return await createUser.save();
        }catch(err){
            throw err;
        }
    }

    // static async updateUser(name, last_name){
    //     try{
    //         console.log("-----name --- last_name-----", name, last_name);
            
    //         const createUser = new UserModel({name, last_name});
    //         return await createUser.save();
    //     }catch(err){
    //         throw err;
    //     }
    // }

    static async getUserByEmail(email){
        try{
            return await UserModel.findOne({email});
        }catch(err){
            console.log(err);
        }
    }

    static async checkUser(email){
        try {
            return await UserModel.findOne({email});
        } catch (error) {
            throw error;
        }
    }

    static async generateAccessToken(tokenData,JWTSecret_Key,JWT_EXPIRE){
        return jwt.sign(tokenData, JWTSecret_Key, { expiresIn: JWT_EXPIRE });
    }
}

module.exports = UserServices;