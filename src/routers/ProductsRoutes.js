const express =  require('express')
const ProductsController = require('../controllers/ProductsControllers')
const router = express.Router()

router.get('/' , ProductsController.index) // index de produtos
router.get('/:slug/:id', ProductsController.show)

router.delete('/:id' , ProductsController.destroy)

module.exports = router