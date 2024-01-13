const getRandomNumbers = (floor, ceil, totalNumbers) => {
    const numbers = []

    for (let i=0; i<parameters.totalNumbers; i++){
        numbers.push(
            Math.round(
                Math.random() * (parameters.ceil - parameters.floor) + parameters.floor))
    }

    return numbers
}

const numbers = getRandomNumbers(3, 15, 20)
console.log(numbers)