const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  " ": String,
  Number: Number,
  'Name of Location': String,
  Date: String,
  'Login Hour': String,
  Name: String,
  Age: Number,
  gender: String,
  Email: String,
  'No Telp': String,
  'Brand Device': String,
  'Digital Interest': String,
  'Location Type': String
}, 
// { strict: false }
);

module.exports = mongoose.model('summaryDatasetCustomer', customerSchema,'summaryDatasetCustomer');
