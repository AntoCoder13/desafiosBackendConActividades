//! Utilizando modulo FS en NODE
const fs = require("fs")

//Fs sincrónico
//Escribir o sobreescribir el archivo
let content = "Hello World Sync"
fs.writeFileSync("miArchivo.txt", content)
console.log("File created")

//Obener el contenido de un archivo
const myContent = () => {
    let contentFile  = fs.readFileSync("2.txt", "utf-8")
    return contentFile
}
console.log(myContent())

//Ver si existe un archivo
const existentFile = fs.existsSync("2.txt")
if (existentFile){
    console.log("File exists")
} else console.log("File doesn't exists")

//fs.mkdirSync("newFile.txt")

//Agregar contenido a un archivo 
const content2 = "\n Hi, I'm new content"
fs.appendFileSync("newFile2.txt", content2)

console.log("Content appended")

//Eliminar contenido 
fs.unlinkSync("2.txt")

//---------------------------------//
//Fs Asincrónico

fs.writeFile("archivoAsincronico.txt", "This is my async content", (error) => {
    if(error){
        console.error("Error to create file")
    } else console.log("File succesfully created")
})

fs.appendFile("archivoAsincronico.txt", "\n This is my new async content", (error) => {
    if(error){
        console.error("Error to append file", error.message)
    } else console.log("File succesfully appended")
})

fs.readFile("archivoAsincronico.txt", "utf-8" ,(error, content) => {
    if(error){
        console.error("Error to read file", error.message)
    } else console.log("Content: ", content)
})