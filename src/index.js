const app = require('./app');
const db = require('./config/db');
const UserModel = require('./models/user.model');
const CarModel = require('./models/car.model');
const port = 3000;


app.listen(port, ()=>{
    console.log(`*** server listening on port http://localhost:${port} ***`);
});