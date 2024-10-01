const express = require('express')
const router = express.Router()

// Middleware to validate integration_name
const validateIntegrationName = (req, res, next) => {
    if (req.body.integration_name !== 'Perfios') {
        return res.status(400).json({
            "integration_name": "Perfios",
            "api_name" : "",
            "statusCode": "400",
            "message": "integration_name is not Perfios",
            "data" : []
        });
    }
    next();
};

router.post('/getAccountDetails', validateIntegrationName, (req, res) => {
    console.log("API invoked: /perfios/getAccountDetails")
    // sample response
    res.json({
        "integration_name": req.body.integration_name,
        "api_name": req.body.api_name,
        "statusCode": req.body.statusCode,
        "message": "Get Account Details fetched successfully",
        "data": {
          "accounts": [
            {
              "accountNumber": "123456789",
              "bankName": "Bank A",
              "balance": 1500.00,
              "currency": "USD"
            },
            {
              "accountNumber": "987654321",
              "bankName": "Bank B",
              "balance": 2500.00,
              "currency": "USD"
            }
          ]
        }
      })
});

router.post('/getTransactionHistory', validateIntegrationName, (req, res) => {
    console.log("API invoked: /perfios/getTransactionHistory")
    // sample response
    res.json({
        "integration_name": req.body.integration_name,
        "api_name": req.body.api_name,
        "statusCode": req.body.statusCode,
        "message": "Get Transaction History fetched successfully",
        "data": {
          "transactions": [
            {
              "date": "2024-09-01",
              "description": "Deposit",
              "amount": 500.00,
              "balanceAfterTransaction": 2000.00
            },
            {
              "date": "2024-09-05",
              "description": "Withdrawal",
              "amount": -100.00,
              "balanceAfterTransaction": 1900.00
            }
          ]
        }
      })

});

router.post('/getCreditScore', validateIntegrationName, (req, res) => {
    console.log("API invoked: /perfios/getCreditScore")
    // sample response
    res.json({
        "integration_name": req.body.integration_name,
        "api_name": req.body.api_name,
        "statusCode": req.body.statusCode,
        "message": "Get Credit Score fetched successfully",
        "data": {
          "creditScore": 750,
          "factorsAffectingScore": [
            {
              "factor": "Payment History",
              "impact": "+40"
            },
            {
              "factor": "Credit Utilization",
              "impact": "-20"
            }
          ]
        }
      })
});

module.exports = router

