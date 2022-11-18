const Annotations = require('../models/AnnotationData')

module.exports={

    async update(request, response){
        const { id } = request.params; //vai buscar o id
        const { notes } = request.body;// e alterar o conteudo do notes 

        const annotation = await Annotations.findOne({_id : id });//faz a busca pelo id dentro do db

        if(notes){
            annotation.notes = notes; //vai pegar o notes do body e vai sobrescrever no registro do db

            await annotation.save();//salva a atualização
        }

        return response.json(annotation);//vai retornar independente de ter acionado o if ou não
    }


}