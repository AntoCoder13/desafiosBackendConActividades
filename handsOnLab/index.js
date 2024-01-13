const UserManager = require("./class/userManager");

const userManager = new UserManager()

const users = async() => {
    const newUser = {
        name: 'anto',
        lastname: 'argisan',
        username: 'tona',
        password: 'tona108'
    }
    //userManager.createUser(newUser)
    const users = await userManager.getUsers()

    userManager.validateUser(newUser.username, newUser.password)
}

users()