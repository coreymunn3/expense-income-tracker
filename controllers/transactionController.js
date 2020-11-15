// Model
const Transaction = require('../models/Transaction');

// methods that will use model to interact with database...

// @desc       Get all transactions
// @route      GET /api/va/transactions
// @access     Public
exports.getTransactions = async (req, res, next) => {
  try {
    // get all transactions
    const transactions = await Transaction.find();
    return res.status(200).json({
      sucess: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc       Add transaction
// @route      POST /api/va/transactions
// @access     Public
exports.addTransaction = async (req, res, next) => {
  try {
    // pull data out of request body
    const { text, amount } = req.body;
    // create record with model
    const transaction = await Transaction.create(req.body);
    // return response
    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error',
      });
    }
  }
};

// @desc       Delete transaction
// @route      GET /api/va/transactions/:id
// @access     Public
exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: 'No Transaction Found',
      });
    } else {
      await transaction.remove();
      return res.status(200).json({
        success: true,
        data: {},
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};
