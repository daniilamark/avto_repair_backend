const UserServices = require('../services/user.service');

exports.registration = async (req, res, next) => {
    try {
        console.log("---req body---", req.body);
        const { name, last_name, email, password } = req.body;
        const duplicate = await UserServices.getUserByEmail(email);
        if (duplicate) {
            throw new Error(`UserName ${email}, Already Registered`)
        }
        const response = await UserServices.registerUser(name, last_name, email, password);

        res.json({ status: true, success: 'User registered successfully' });

    } catch (err) {
        console.log("---> err -->", err);
        next(err);
    }
}

exports.login = async (req, res, next) => {
    try {

        const { email, password } = req.body;
        console.log(req.body);

        if (!email || !password) {
            throw new Error('Parameter are not correct');
        }
        let user = await UserServices.checkUser(email);
        if (!user) {
            throw new Error('User does not exist');
        }

        const isPasswordCorrect = await user.comparePassword(password);

        if (isPasswordCorrect === false) {
            throw new Error(`Username or Password does not match`);
        }

        // Creating Token

        let tokenData;
        tokenData = { _id: user._id, email: user.email };
    

        const token = await UserServices.generateAccessToken(tokenData,"secret","1h")

        res.status(200).json({ status: true, success: "sendData", token: token });
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}

exports.getUser =  async (req, res, next)=>{
    try {
        const { email } = req.body;
        
        let user = await UserServices.checkUser(email);
        let name = user['name'];
        let last_name = user['last_name'];
        // let userData = await UserService.getUserByEmail(email);
        console.log(name);

        res.json({status: true, success:name+" "+ last_name});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}

