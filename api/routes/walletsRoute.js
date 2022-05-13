const {Router} = require('express')
const WalletController = require('../controllers/WalletController')

const router = Router()

router.get('/api/v1/wallet', WalletController.pegaTodasAsPessoas)

module.exports = router