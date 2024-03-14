//CLASE 04/12/23
const express = require("express")

const app = express()
const port = 3000

const products = []

//middleware
app.use(express.json())

app.get('/products', (req, res) => {
    res.json({ message: products })
})

app.get('/products/:Id', (req, res) => {
    const { Id} = req.params

    const product = products.find(product => product.Id === Id)

    if(!product) return res.status(404).json({ error: 'Product not found' })

    res.json({ message: product })
})

app.post('/products', (req, res) => {
    const { Id } = req.body

    const newProduct = {
        Id, 
    }
})

products.push(newProduct)

res.status(201).json({ message: 'Product created' })

//TODOS LOS CAMPOS TIENEN QUE LLEGAR, SI NO LLEGA ALGUNO SE COLOCA ERROR 400
app.put('/products/:Id', (req, res) => {
    const { Id } = req.params
    const { name, lastname, email } = req.body

    if(!name || !lastname || !email) return res.status(400).json({ error: 'Bad request' })

    const product = products.find(product => product.Id === Id)

    if(!product) return res.status(404).json({ error: 'Product not found' })

    product.name = name
    //product.lastname = lastname
    //product.email = email

    res.json({ message: 'Product updated' })
})

//SI QUIERO SOLAMENTE ACTUALIZAR UN ITEM
app.path('/products/:Id', (req, res) => {
    const { Id } = req.body

    if(!Id) return res.status(400).json({ error: 'Bad request' })

    const product = products.find(product => product.Id === Id)

    if(!product) return res.status(404).json({ error: 'Product not found' })

    product.Id = Id

    res.json({ message: 'Product updated' })
})

app.delete('/products/:Id', (req, res) => {
    const { Id } = req.params

    const productIndex = products.findIndex(product => product.Id === Id)
    if(productIndex === -1) return res.status(404).json({ error: 'Product not found' })

    products.splice(productIndex, 1)

    res.json({ message: 'Product deleted' })
})

app.get('*', (req, res) => {
    res.status(404).json({ message: 'Not found' })
})

// node src/index.js POR SI HAY VARIACIONES EN EL CÓDIGO
app.listen(port, () => {
    console.log(`Server is running at port ${ port }`)
})
