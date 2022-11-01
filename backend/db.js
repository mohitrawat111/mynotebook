
const moongose = require('mongoose');


// const mongoURI = "mongodb://localhost:27017/mynotebook"
// const mongoURI = 'mongodb+srv://mynotebook:yuZVDTLFNKW2c8ah@cluster0.ubmgnxz.mongodb.net/mynotebook?retryWrites=true&w=majority'
const mongoURI = process.env.DATABASE

const connectToMongo = () => {
    moongose.connect(mongoURI, () => {
        console.log("connect to Mongo Succesfully");

    })
}

module.exports = connectToMongo