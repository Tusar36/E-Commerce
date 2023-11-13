const express = require('express')

const router = express.Router()


const addCartItems = require('../controllers/addCartItems')
const getCartItems = require('../controllers/getCartItems')
const deleteCartItems = require('../controllers/deleteCartItems')


router.post('/add',addCartItems)
router.delete('/delete/:id',deleteCartItems)
router.get('/get/:id',getCartItems)


module.exports = router