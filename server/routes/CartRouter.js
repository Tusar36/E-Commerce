const express = require('express')

const router = express.Router()


const addCartItems = require('../controllers/Cart/addCartItems')
const getCartItems = require('../controllers/Cart/getCartItems')
const deleteCartItems = require('../controllers/Cart/deleteCartItems')


router.post('/add',addCartItems)
router.delete('/delete/:id',deleteCartItems)
router.get('/get/:id',getCartItems)


module.exports = router