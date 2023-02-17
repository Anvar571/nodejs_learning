const mongose = require("mongoose");

const customerSchema = mongose.Schema({
    firstname: {type: String},
    lastname: {type: String},
    phone: {type: String},
    email: {type: String}
})

module.exports = mongose.model("customer", customerSchema);