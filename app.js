const express = require('express')
const ProductsRoutes = require('./src/routers/ProductsRoutes')
const app = express()

app.use('/products' , ProductsRoutes)

app.listen(3030, () => {
  console.log('Rodando na porta 3030')
})
