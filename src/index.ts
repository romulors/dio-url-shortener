import express from 'express'
import { URLController } from './controller/URLController'
import { MongoConnection } from './database/MongoConnection'
import { config } from './config/Constants'

//Cria a instancia do express
const api = express()

//Adiciona o filtro para receber json no POST
api.use(express.json())

//Cria a conexão ao banco de dados com os dados da string de conexao do MongoDB
const database = new MongoConnection()
database.connect()

//Aqui define as rotas para cada extensão.
const urlController = new URLController()

//colocamos o hash por ultimo para que permita tentar retornar antes as URLs salvas e de teste
api.post('/shorten', urlController.shorten)
api.get('/:hash', urlController.redirect)
//Obs - o :hash informa que o termo hash é uma variável a ser informada no caminho do URL


api.listen(config.PORT, () => console.log(`Express listening on ${config.API_URL}`))
