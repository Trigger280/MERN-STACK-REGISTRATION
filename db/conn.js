// const mongoose = require("mongoose");
// require('dotenv').config()

// const DB = process.env.MONGO_URI;
// const DB = "mongodb+srv://Aditya:Aditya@reg.khli5ne.mongodb.net/Authusers?retryWrites=true&w=majority&appName=Reg" 

// mongoose.connect(DB,{
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// }).then(()=> console.log("DataBase Connected")).catch((errr)=>{
//     console.log(errr);
// })

const mongoose = require("mongoose");
require('dotenv').config();

const DB = process.env.MONGO_URI;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Database Connected Successfully"))
.catch((err) => console.log("Database Connection Error:", err));
