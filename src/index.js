//CLASE 04/12/23
const express = require("express")

const app = express()
const port = 3000

const users = []

//middleware
app.use(express.json())

app.get('/users', (req, res) => {
    res.json({ message: users })
})

app.get('/users/:emailId', (req, res) => {
    const { emailId} = req.params

    const user = users.find(user => user.email === emailId)

    if(!user) return res.status(404).json({ error: 'User not found' })

    res.json({ message: user })
})

app.post('/users', (req, res) => {
    const { name,  lastname, email } = req.body

    const newUser = {
        name, 
        lastname, 
        email
    }
})

users.push(newUser)

res.status(201).json({ message: 'User created' })

//TODOS LOS CAMPOS TIENEN QUE LLEGAR, SI NO LLEGA ALGUNO SE COLOCA ERROR 400
app.put('/users/:emailId', (req, res) => {
    const { emailId } = req.params
    const { name, lastname, email } = req.body

    if(!name || !lastname || !email) return res.status(400).json({ error: 'Bad request' })

    const user = users.find(user => user.email === emailId)

    if(!user) return res.status(404).json({ error: 'User not found' })

    user.name = name
    user.lastname = lastname
    user.email = email

    res.json({ message: 'User updated' })
})

//SI QUIERO SOLAMENTE ACTUALIZAR UN ITEM
app.path('/users/:emailId', (req, res) => {
    const { emailId } = req.params
    const { name, lastname, email } = req.body

    if(!name || !lastname || !email) return res.status(400).json({ error: 'Bad request' })

    const user = users.find(user => user.email === emailId)

    if(!user) return res.status(404).json({ error: 'User not found' })

    user.name = name
    user.lastname = lastname
    user.email = email

    res.json({ message: 'User updated' })
})

app.delete('/users/:emailId', (req, res) => {
    const { emailId } = req.params

    const userIndex = users.findIndex(user => user.email === emailId)
    if(userIndex === -1) return res.status(404).json({ error: 'User not found' })

    users.splice(userIndex, 1)

    res.json({ message: 'User deleted' })
})

app.get('*', (req, res) => {
    res.status(404).json({ message: 'Not found' })
})

// node src/index.js POR SI HAY VARIACIONES EN EL CÓDIGO
app.listen(port, () => {
    console.log(`Server is running at port ${ port }`)
})
