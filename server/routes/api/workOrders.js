const express = require('express')
const router = express.Router()
const orderController = require("./../../controllers/orderController");


router.post("/submit", orderController.submitOrder)
router.get("/get", orderController.getOrders)
module.exports = router