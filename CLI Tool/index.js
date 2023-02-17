const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = mongoose.connect("mongodb://localhost:27017/cli");

const Customer = require("./models/custumer");

// add customer
const addCustomer = (customer) => {
    Customer.create(customer).then(customer => {
        console.log("New customer added");
        mongoose.connection.close();
    })
}

// find 
const findCustomer = (name) => {
    const search = new RegExp(name, 'i');
    Customer.find({$or: [{firstname: search}, {lastname: search}]})
    .then(customer => {
        console.info(customer);
        console.info(`${customer.length} matches`);
        mongoose.connection.close();
    })
}

export {
    addCustomer,
    findCustomer
}

// update

// delete