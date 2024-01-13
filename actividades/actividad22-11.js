const fs = require("fs")

class fileHandler {
    constructor(fileName) {
        this.fileName = fileName
    }

    getCurrentDateTime() {
        const dateTime = new Date();
        return dateTime.toLocaleString()
    }

    writeCurrentDateTimeToFie(callback) {
        const content = this.getCurrentDateTime();
        fs.writeFile(this.fileName, content, (error) => {
            if (error) {
                callback(error)
            } else {
                console.log(`Fecha y hora agregados en ${this.fileName}`)
            }
        })
    }

    readFileAndLogContent(callback) {
        fs.readFile(this.fileName, (error, content) => {
            if (error) {
                callback(error)
            } else {
                console.log(`Contenido del archivo ${this.fileName}: ${content}`)
            }
        })
    }
}   

const fileHandler = new FileHandler("miArchivo.txt")

fileHandler.writeCurrentDateTimeToFile((error) => {
    if(error){
        console.log("Error al escribir el archivo", error.message)
    } else {
        fileHandler.readFileAndLogContent((error) => {
            if(error){
                console.error("Error al leer el archivo", error.message)
            } else{
                console.log("Archivo leído correctamente")
            }
        })
    }
})