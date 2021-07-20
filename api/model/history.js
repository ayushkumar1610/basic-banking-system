const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const HistoryModel = new Schema({
    sender_name: {type: String, required: true},
    receiver_name: {type: String, required: true},
    amount: {type: Number, required: true},
    date: {type: Date, default: Date.now}
    
})

const History = mongoose.model('transaction_history', HistoryModel);
module.exports ={History};