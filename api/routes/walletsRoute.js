const {Router} = require('express')
const WalletController = require('../controllers/WalletController')

const router = Router()

router.get('/api/v1/wallet', WalletController.pegaTodasAsPessoas)
router.get('/api/v1/wallet/:id',WalletController.pegaUmaPessoa )
router.post('/api/v1/wallet', WalletController.criaPessoa)
router.put('/api/v1/wallet/:id',WalletController.atualizaPessoa )
router.delete('/api/v1/wallet/:id',WalletController.deletaPessoa )


module.exports = router