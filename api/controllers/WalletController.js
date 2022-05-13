const database = require('../models')

class WalletController{
    static async pegaTodasAsPessoas(req, res){ // metodo que vai pegar todas os registros

    try {
        const todasAsPessoas = await database.Wallet.findAll()
        return res.status(200).json(todasAsPessoas)
    } catch (error) {
        return res.status(500).json(error.message)
    }   
    }
}

module.exports = WalletController