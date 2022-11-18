const mongoose = require('mongoose');
//new aloca espaço na memória para armazenar objetos e métodos
const AnnotationDataSchema = new mongoose.Schema({
    title: String,
    notes: String,
    priority: Boolean
});

module.exports = mongoose.model('Annotations', AnnotationDataSchema);//atribui o annotationsDataSchema ao nome annotations