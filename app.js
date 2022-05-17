const express = require('express')
const ProductsController = require('./src/controllers/ProdutosControllers')
const ProductsRoutes = require('./src/routers/ProductsRoutes')
const app = express()

app.set('view engine', ejs)
app.use(express.static(__dirname + 'public'))

app.get('/produtos', ProductsController.index)

app.listen(3030, () => {
  console.log('Rodando na porta 3030')
})
