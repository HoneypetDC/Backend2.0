const mascotasModel = require("../model/MascotasModel")

module.exports = class MascotasController{
    static async getAll(request,response){
        try{
            const result = await mascotasModel.find({});
            response.status(200).json(result);
        }catch(err){
            response.status(404).json({message:err.message});
        }
    }

    static async getById(request,response){
        try {
            const id = request.params.id;
            const result = await mascotasModel.findOne({_id: id});
            if (result != null) {
              response.status(200).json(result)
              
            } else {
              response.status(404).json();
            }
          } catch (err) {
            response.status(404).json({message: err.message})
        }
    }

    static async getP12(request,response){
        try{
            const p1 = request.params.param1;
            const p2 = request.params.param2;
            const result = await mascotasModel.find({pet_name: p1, pet_location:p2}) 
            if(result != null){
                response.status(200).json(result)
            }else{
                response.status(404).json();
            }
       
        }catch(err){
            response.status(400).json({message: err.message});
        }

    }

    static async deleteById(request, response){
        try {
          const id = request.params.id;
          await mascotasModel.deleteOne({_id: id});
          response.status(200).json();
        } catch (err) {
          response.status(400).json({message: err.message})
        }
      }

    static async create(request,response){        
        try{
            const documento = request.body;
            const newMascota = await mascotasModel.create(documento);
            response.status(201).json(newMascota);
        }catch(err){
            response.status(400).json({message: err.message}); 
        }
    }

    static async updateById(request,response){        
        try{
            const id = request.params.id;
            const documento = request.body;
            await mascotasModel.updateOne({_id: id}, documento);
            response.status(201).json();
        }catch(err){
            response.status(400).json({message: err.message}); 
        }
    }

    static async replaceById(request,response){        
        try{
            const id = request.params.id;
            await mascotasModel.updateOne({"_id": id}, {"pet_name": "Ramon"});
            response.status(201).json();
        }catch(err){
            response.status(400).json({message: err.message}); 
        }
    }
}