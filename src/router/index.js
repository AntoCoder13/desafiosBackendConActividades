const cartsController = require('../controllers/carts-controller')
const productsController = require('../controllers/products-controllers')
//destructuring para que traiga algo en particular:
//const { petsController } = require('../controllers/pets-controllers')

const router = app => {
    app.use('/api/carts', cartsController)
    app.use('/api/products', productsController)
}

module.exports = router