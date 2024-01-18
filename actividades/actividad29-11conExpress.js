const express = require('express')

const app = express()
const port = 3000

const users = {
    'message': [
        {
            'id': 1,
            'name': 'Carina',
            'lastname': 'Sanchez',
            'providence': 'mza'

        },
        {
            'id': 2,
            'name': 'Pablo',
            'lastname': 'Argi',
            'providence': 'bs-as'
        },
        {
            'id': 3,
            'name': 'Giulianno',
            'lastname': 'Argi Sanchez',
            'providence': 'mza'
        }
    ]
}

app.get('/greet', (req, res) => {
    res.json({ message: 'Hi Anto' })
})

app.send('/welcome', (req, res) => {
    res.send(`
    <html>
        <body style ='background-color:black'>
            <h1 style ='color:pink'> HI ANTO </h1>
            <p style ='color:yellow'> THIS IS A POOR TRY OF .JS </p>
        </body>
    </html>
    `)
})

app.get('/users', (req, res) => {
    //req.query.providence
    const { providence } = req.query
    //console.log(providence)
    if(providence){
        const usersResponse = users.filter(user => user.providence == providence)
        return res.json({ message: usersResponse })
    }
    res.json({ message: users })
})

app.get('/users/:uid', (req, res) => {
    const user = users.find(user => user.id === Number(req.params.uid))
    //console.log(req.params.uid)
    res.json({ message: user })
})

app.get('/users/:uid/carts', (req, res) => {
    const { carts } = users.find(user => user.id === Number(req.params.uid))
    res.json({ message: carts })
})

app.get('/users/:uid/carts/:cid', (req, res) => {
    const {uid, cid} = req.params
    // NO SE HACE ASÍ !! DESTRUCTURING
    //const { carts } = users.find(user => user.id === Number(req.params.id))
    //const cart = carts.find(cart => cart.id === Number(req.params.cid))

    const { carts } = users.find(user => user.id === Number(uid))
    const cart = carts.find(cart => cart.id === Number(cid))
    res.json({ message: cart })
})

app.listen(3000, () => {
    console.log(`Server running at port ${port}`)
})

