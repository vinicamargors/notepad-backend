const Annotations = require('../models/AnnotationData')

module.exports = {

    async read(request, response){
        const priority = request.query;//vai retornar apenas quem é true or false

        const priorityNotes = await Annotations.find(priority); //vai retornar todas as anotações que o priority é true

        return response.json(priorityNotes);
    },

    async update(request, response){ //atualizar a condição de true or false da anotação
        const { id } = request.params;// ele vai até o banco de dados, busca pelo id e se for false vira true e se for true vira false
        
        const annotation = await Annotations.findOne({_id : id});/* determina o id do banco de dados igual o id do parametros que defini*/ 
        if (annotation.priority){// annotation.priority especifica que desejo somente o priority do db
            annotation.priority = false //se for true, transforma em false, true já vem como padrão do priority
        }else{
           annotation.priority = true // se for false, transforma para true 
        }

        await annotation.save(); //depois de manipular o registro, esse registro vai ser salvo

        return response.json(annotation); // vai me retornar o registro alterado e atualizado
    }

}