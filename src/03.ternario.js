const number = 1
const result = 'The Number is: ' + (number === 1 ? 'One' : 'Two')

console.log(result)

const anotherNumber = 1
const anotherResult =
    anotherNumber === 1 ?
    'One' :
    anotherNumber === 99 ?
    'Ninety' :
    anotherNumber === 1000 ?
    'One Thousand' :
    'No Match'


console.log(anotherResult)