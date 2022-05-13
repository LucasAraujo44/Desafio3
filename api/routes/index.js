const bodyParser = require('body-parser')
const wallet = require('./walletsRoute')

module.exports = app =>{
    app.use(bodyParser.json())
    app.use(wallet)
    
}