//read and write asynchronous using callback
const fs = require ('fs')

const firstTxt = fs.readFile('./content/first.txt', 'utf-8', (err,result) => {
    if(err) {
        console.log(err)
        return
    } else {
        console.log(result)
        return result
    }
})

