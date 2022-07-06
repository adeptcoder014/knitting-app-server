const mongoose = require('mongoose')

const AuthSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})
// -------- A Database is the amalgamation of different types of Collctions -------------//

const Auth = mongoose.model('Auth', AuthSchema)//collection name it is
module.exports = Auth