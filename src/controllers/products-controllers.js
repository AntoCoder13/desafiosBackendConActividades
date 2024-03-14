const { Router } = require("express")
const { router } = require("../server")

const router = Router()

//1ro: puede cambiar el método http porque es su responsabilidad identificar el método http (get, post, etc)
const products = []

//2do: puede cambiar el endpoint al que está accediendo el usuario porque su responsabilidad es identificar
//lo que está buscando el usuario
router.get('/', (req, res) => {
//3ro: puede cambiar la respuesta que se le da al usuario ( RESPONSABILIDAD > SOLID)
    res.json({ payload: products })
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    const product = products.find(product  => product.id === id)
    res.json({ payload: product })
})

router.post('/', (req, res) => {
    const { id, title, descrption, code, price, status, stock, category, thumbnails } = req.body
    newProductInfo = {
        id,
        title,
        descrption, 
        code, 
        price, 
        status, 
        stock, 
        category, 
        thumbnails
    }
    products.push(newProductInfo)
    res.json({ payload: products })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    const product = products.find(product  => product.id === id)
    res.json({ payload: product })
})

module.exports = router