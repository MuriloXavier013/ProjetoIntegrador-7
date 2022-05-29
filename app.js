const express = require('express')
const ProductsRoutes = require('./src/routers/ProductsRoutes')
const app = express()

// ****************** Configurando o EJS  ********************************//
app.set('view engine', 'ejs')
app.set(express.static('public'))

app.use('/products' , ProductsRoutes)

/*app.get('/' , (res, req) => {
  res.render('index')
})*/

app.listen(3030, () => {
  console.log('Rodando na porta 3030')
})
