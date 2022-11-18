const express = require('express'); //instanciar o express 
const routes = express.Router(); // instancia as rotas do express

const AnnotationsController = require('./controllers/AnnotationsController');
const ContentController = require('./controllers/ContentController');
const PriorityController = require('./controllers/PriorityController');

//Rota Annotations
routes.post('/annotations', AnnotationsController.create); //toda vez que requisitar a rota /annotations do tipo post, ele vai executar o código AnnotationsController na função create
routes.get('/annotations', AnnotationsController.read); //toda vez que requisitar a rota /annotations do tipo get, ele vai executar o código AnnotationsController na função read
routes.delete('/annotations/:id', AnnotationsController.delete) // vai deletar pelo id requisitado

//Rota Priority
routes.get('/priorities', PriorityController.read)//toda vez que requisitar a rota /priorities do tipo get, ele vai executar o código PriorityController na função read
routes.post('/priorities/:id', PriorityController.update)//poderia usar o put no lugar do post, mas nesse caso tanto faz

//Rota Content
routes.post('/contents/:id', ContentController.update);//id pq vamos alterar um registro já pronto

module.exports = routes;