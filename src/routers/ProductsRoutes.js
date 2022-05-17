const express =  require('express')
const ProductsController = require('../controllers/ProdutosControllers')
const router = express.Router()

router.get('/' , ProductsController.index)

module.exports = router