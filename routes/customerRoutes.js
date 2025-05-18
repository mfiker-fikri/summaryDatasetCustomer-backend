const express = require('express');
const router = express.Router();
const { getAllCustomers, getCustomerSummary } = require('../controllers/customerController');

/**
 * @swagger
 * /api/customers:
 *   get:
 *     summary: Get all customers
 *     tags: [Customers]
 *     responses:
 *       200:
 *         description: List of customers
 */
router.get('/', getAllCustomers); 

/**
 * @swagger
 * /api/customers/summary:
 *   get:
 *     summary: Get customer gender summary
 *     tags: [Customers]
 *     responses:
 *       200:
 *         description: Summary of gender counts
 */
router.get('/summary', getCustomerSummary);


module.exports = router;
