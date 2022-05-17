const ProductsController ={
    index: (req , res) =>{
        res.send("Listando os produtos")
    }, 
    show: (req, res) => {
        const {slug , id} = req.params
        res.send("Mostrando o produto com slug: " + slug + " com id: " + id)
    },
    destroy: (req , res) =>{
        const {id} = req.params
        res.send("Deletando o produto com id: " + id)
    }
}

module.exports = ProductsController