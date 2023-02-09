const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    followers: {
        type: Array,
        default: []
    }
},
{ timestamps: true }
)

module.exports = mongoose.model("User", UserSchema)
// export default mongoose.model("User", UserSchema)