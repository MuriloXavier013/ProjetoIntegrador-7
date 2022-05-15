const express = require('express')
const app = express()

app.set('view engine', ejs)
app.use(express.static(__dirname+ 'public'))

app.get('/', (req, res)=>{
    res.send('Retorno da index')
})



app.listen(3030, () =>{
    console.log('Rodando na porta 3030')
})