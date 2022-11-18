const mongoose = require('mongoose'); //instancia e requere o mongoose 

const dbConfig = 'mongodb+srv://camargovini:re250295@cluster0.pt2ey4a.mongodb.net/annotations?retryWrites=true&w=majority';//link de conexão que o proprio mongodb fornece

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true, //padrão do mongoose colocar esses
    useUnifiedTopology: true //dois objetos para evitar warnings e errors
})

module.exports = connection; //exporta para usar ele em toda aplicação
