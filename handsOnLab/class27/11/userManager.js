const fs = require('node:fs')
const crypto = require('node:crypto')

const path = './files/User.json'

class UserManager {
    users = []

    async getUsers(){
        if(fs.existsSync(path)){
            const data = fs.promises.readFile(path, 'utf-8')
            //el JSON lo transforma en objeto
            const  users = JSON.parse(data)
        } 

    }

    async createUser(user){
        const salt = crypto.randomBytes(128).toString('base64')

        const newUser = {
            name: user.name,
            lastname: user.lastname,
            username: user.username,
            password: crypto
        }

        this.users.push(newUser)
        
        //por si sale error ENOENT
        await fs.promises.mkdir('./files', {recursive:true})
        //el objeto lo convierte en JSON
        await fs.promises.writeFile(path, JSON.stringify(this.users, null, `\t`))
    //objeto tipo JSON lleva obligatoriamente dobles comillas "" en par clave/valor
    }

    async validateUser(username, password){
        const users = await this.getUsers()
        
        if(!users){
            return console.log("There aren't users")
        }

        const userToValidate = users.find(user => user.username === user.username)

        if(!userToValidate){
            return console.log('User not found.')
        }

        const hashedPassword = crypto
        .createHmac('sha256', userToValidate.salt)
        .update(password)
        .digest('hex')

        if(hashedPassword === userToValidate){
            console.log('Logued !')
        } else console.log('Error: wrong password')
    }
}

module.exports = UserManager
