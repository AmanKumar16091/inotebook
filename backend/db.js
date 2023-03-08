const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const mongoURI = "mongodb+srv://Aman:practice@cluster0.mr4padv.mongodb.net/?retryWrites=true&w=majority"


const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}
module.exports = connectToMongo;