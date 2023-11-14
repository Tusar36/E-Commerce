const express = require('express')
const router = express.Router()

const getOrders = require('../controllers/Orders/getOrders')
const placeOrders = require('../controllers/Orders/placeOrders')
const getUserOrders = require('../controllers/Orders/getUserOrders')
const updateOrders = require('../controllers/Orders/updateOrder')

router.get('/',getOrders)
router.get('/get/:id',getUserOrders)
router.post('/place',placeOrders)
router.post('/update',updateOrders)

module.exports = router