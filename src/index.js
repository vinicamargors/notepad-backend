const express = require('express'); //instanciar o express 
const routes = require('./routes'); //busca o routes
const cors = require('cors');//instancia o cors

const app = express(); 
require('./config/dbConfig'); //importa o outro código


app.use(cors());//vai o cors ser lido antes do express e do routes
app.use(express.json()); //plugin que fala pro express usar json nas requisições, para ler e enviar o json
app.use(routes);//faz o express utilizar as rotas

app.listen(3333); //porta do servidor que o express vai ouvir
