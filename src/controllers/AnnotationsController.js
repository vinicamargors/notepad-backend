const Annotations = require('../models/AnnotationData'); //requere do models

module.exports={ //exporta tudo que tá aqui dentro
   //async de assíncrono pq o DB está fora do localhost do PC e await para esperar esssa informação retornar
   async read(request, response){ //async e wait senão o código quebra e não consegue ler a linha embaixo do annotationsList
      const annotationsList = await Annotations.find();//buscando do banco de dados pelo mongoose
      
      return response.json(annotationsList);//vai retornar a resposta pro insomnia a função annotations lista que faz a busca de dados(find) no mongodb
   },//read vai ler as requisições do DB

    async create(request, response){ //vai buscar no body da requisição todas as 3 informações abaixo e vai retornar pra ele
      const { title, notes, priority } = request.body; //body é o corpo da requisição, no caso title, notes e priority. Portanto vai extrair do campo da requisição essas 3 variáveis     

      if (!notes || !title ){ //se não tiver um titulo ou anotação para registrar, vai retornar um erro http
         return response.status(400).json({error: "Necessário um titulo ou anotação"})
      }

      const annotationsCreated = await Annotations.create({//solicitar que o mongoose criar o registro com essas 3 infos no banco de dados
         title,
         notes,
         priority
      }) //quando fizer a inserção no db, ele retorne pra mim o registro que foi criado
      
      return response.json(annotationsCreated);
   },
    
    async delete(request, response){//vai buscar pelo id enviado na rota http, ex: annotations/1, se for requisição DELETE, vai deletar o id 1
      const { id } = request.params;//parametro (no caso o id) para requisitar o delete específico

    const annotationsDeleted = await Annotations.findOneAndDelete({ _id: id }) /* determina o id do banco de dados igual o id do parametros que defini*/ 
    
    if(annotationsDeleted){
      return response.json(annotationsDeleted) //se for deletado, devolve o registro do delete
      }

      /*esse return do erro não funciona por algum motivo
      return response.status(401).json({error: "Não foi possivel encontrar a rota de exclusão"})
      */   
   }

    
    
}

