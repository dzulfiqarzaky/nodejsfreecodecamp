const os = require('os')

//method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime} seconds`)

//info about current user
const user = os.userInfo()
console.log(user)

//info about current OS
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}
console.log(currentOS)