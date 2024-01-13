const { error } = require("console")

const fs = require("fs").promises

class FileHandler{
    async writeFileWithPromise (){
        try{
            await fs.writeFile("myFileWithPromise.txt", "Hello World With Promises")
            console.log("File created correctly")
        } catch (error){
            console.log("Error to create file", error)
        }
    }
}

const fileHandler = new FileHandler()
fileHandler.writeFileWithPromise()

//Ejemplo de uso sin class con promesa
fs.appendFile("myFileWithPromise.txt", "\n New content with promises")
.then(() => console.log("File updated correctly"))
.catch(() => console.error("Error to update file", error))

// then y catch va sin función/clase
//async/await > try/catch se usa dentro de una función, pero es más efectivo

class FileReadHandler{
    async readFile(){
        try { const data = await fs.readFile("myFile.txt", "utf-8")
        console.log(data)
        }
        catch(error){
            console.error("Error to read file", error)
        }
    }
}

const fileReadHandler = new FileReadHandler()
fileReadHandler.readFile()