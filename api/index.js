const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())// o body parser vai fazer a ligacao

const port = 3000

app.get('/teste', (req, res) => res
.status(200)
.send({mensagem: 'Boas vindas a api'
}))

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))// verificar se está tudo ok com o srv

module.exports = app // exporta o app para o resto da aplicacao