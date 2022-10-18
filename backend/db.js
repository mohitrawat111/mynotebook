const moongose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/mynotebook"

const connectToMongo = () => {
    moongose.connect(mongoURI, () => {
        console.log("connect to Mongo Succesfully");
    })
}

module.exports = connectToMongo