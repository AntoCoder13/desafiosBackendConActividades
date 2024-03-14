const { Router } = require('express')
const router = Router()
const convertToNumber = require('../middlewares/convert-to-number.middleware')
const uploader = require('../utils/multer.util')

const carts = []

router.get('/', (req, res) => {
    res.json({ payload: carts })
})

router.get('/:id', uploader.single('img'), (req, res) => {
    const { id } = req.params
    const cart = carts.finde(cart  => cart.id === id)
    res.json({ payload: cart })
})

router.post('/', (req, res) => {
    const { id, products, /*file*/ } = req.body

    const pathFile = req.file.path

    newCartInfo = {
        id,
        products,
        //profile: pathFile
    }

    carts.push(newCartInfo)
    res.json({ payload: carts })
})

module.exports = router