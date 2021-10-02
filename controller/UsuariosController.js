const usuariosModel = require("../model/UsuariosModel")

module.exports = class UsuariosController{

    static async getAllUsuarios(request,response){
        try{
            const result = await usuariosModel.find({});
            response.status(200).json(result);
        }catch(err){
            response.status(404).json({message:err.message});
        }
    }

    static async getUsuariosById(request,response){
        try {
            const id = request.params.id;
            const result = await usuariosModel.findOne({_id: id});
            if (result != null) {
              response.status(200).json(result)
              
            } else {
              response.status(404).json();
            }
          } catch (err) {
            response.status(404).json({message: err.message})
        }
    }

    static async getUsuariosDosParametros(request,response){
        try{
            const p1 = request.params.param1;
            const p2 = request.params.param2;
            const result = await usuariosModel.find({user_name: p1, user_email:p2}) 
            if(result != null){
                response.status(200).json(result)
            }else{
                response.status(404).json();
            }
       
        }catch(err){
            response.status(400).json({message: err.message});
        }

    }

    static async deleteUsuariosById(request, response){
        try {
          const id = request.params.id;
          await usuariosModel.deleteOne({_id: id});
          response.status(200).json();
        } catch (err) {
          response.status(400).json({message: err.message})
        }
      }

    static async insertUsuarios(request,response){        
        try{
            const documento = request.body;
            const newMascota = await usuariosModel.create(documento);
            response.status(201).json(newMascota);
        }catch(err){
            response.status(400).json({message: err.message}); 
        }
    }

    static async updateUsuariosById(request,response){        
        try{
            const id = request.params.id;
            const documento = request.body;
            await usuariosModel.updateOne({_id: id}, documento);
            response.status(201).json();
        }catch(err){
            response.status(400).json({message: err.message}); 
        }
    }

    static async replaceUsuarioById(request,response){        
        try{
            const id = request.params.id;
            await usuariosModel.updateOne({"_id": id}, {"user_name": "Ramon"});
            response.status(201).json();
        }catch(err){
            response.status(400).json({message: err.message}); 
        }
    }
}