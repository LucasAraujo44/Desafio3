const express = require('express')
const routes = require('./routes')

const app = express()
const port = 3000

routes(app)

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))// verificar se está tudo ok com o srv

module.exports = app // exporta o app para o resto da aplicacao