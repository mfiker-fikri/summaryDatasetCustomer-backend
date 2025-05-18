const Customer = require('../models/Customer');

// Get all customers
const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find({}).limit(50);
    res.status(200).json(customers);
    
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get summary data for charts (e.g., gender count)
const getCustomerSummary = async (req, res) => {
  try {
    const genderSummary = await Customer.aggregate([
      { $group: { _id: "$gender", count: { $sum: 1 } } }
    ]);
    res.json({ genderSummary });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllCustomers,
  getCustomerSummary
};