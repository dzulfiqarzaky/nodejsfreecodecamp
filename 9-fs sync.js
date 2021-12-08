//read and write text files synchronous
const fs = require('fs')

const firstTxt = fs.readFileSync('./content/first.txt', 'utf-8')
const secondTxt = fs.readFileSync('./content/second.txt', 'utf-8')

console.log(firstTxt, secondTxt)

//{ flag:'a' } is used to append text files
fs.writeFileSync(
    './content/result-sync.txt', 
    `here is the result of ${firstTxt + secondTxt}`,
    { flag:'a' }
)