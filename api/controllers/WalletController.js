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
    static async pegaUmaPessoa(req, res){
        const {id} = req.params // 
        try {
            const umaPessoa = await database.Wallet.findOne( {
                where: {
                    id: Number (id)
                 } } )
            return res.status(200).json(umaPessoa)

        } catch (error) {
            return res.status(500).json(error.message)

        }
    }
    static async criaPessoa(req, res) {
        const novaPessoa = req.body // envia os dados no corpo da req
        try {
            const novaPessoaCriada = await database.Wallet.create(novaPessoa)
            return res.status(200).json(novaPessoaCriada)
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }

    static async atualizaPessoa(req, res) {
        const { id } = req.params
        const novosDados = req.body
        try {
            await database.Wallet.update(novosDados, { where: { id: Number (id) }})
            const pessoaAtualizada = await database.Wallet.findOne( { where: {id: Number (id)} } )
            return res.status(200).json(pessoaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }
    static async deletaPessoa(req, res){
        const { id } = req.params
        try {
            await database.Wallet.destroy({ where: { id: Number (id) }} )
            return res.status(200).json({mensagem:`o id ${id} foi deletado`})
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }
 }

module.exports = WalletController