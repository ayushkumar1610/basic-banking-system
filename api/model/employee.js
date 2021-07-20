const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const EmpModel = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    amount: {type: Number, required: true},
    ac_number: {type: Number, required: true},
    age: {type: Number, required: true},
    address: {type: String, required: true},
    
})

const Employee = mongoose.model('employee', EmpModel);
module.exports ={Employee};