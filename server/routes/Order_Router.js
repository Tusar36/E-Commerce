const express = require('express')
const router = express.Router()

const getOrders = require('../controllers/Orders/getOrders')
const placeOrders = require('../controllers/Orders/placeOrders')

router.get('/',getOrders)
router.post('/place',placeOrders)

module.exports = router