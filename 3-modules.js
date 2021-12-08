//every file is a module by default
//modules encapsulated code (only share minimum)
const names = require('./4-name')
const sayHi = require('./5-utils')
const data = require('./6-alternative export')
require('./7- mind -grenade')

sayHi(names.john)
sayHi(names.peter)
console.log(data.items)
console.log(data.singlePerson)