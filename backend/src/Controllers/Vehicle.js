
const prisma = require("../Db");

  const addVehicle = async (req,res) =>{
    try{
        const vehicle = await prisma.vehicle.create({
            data:{
                name:req.body.name,
                model : req.body.model,
                licenseplate : req.body.licenseplate,
                type : req.body.type,

            }
        })
        res.status(200);
        res.json({"message":`${vehicle}`});
    }catch(e){
        res.status(400);
        res.json({"message":`${e}`});
    }
}

 const updateVehicle = async (req,res) =>{
    try{
        const vehicle = await prisma.vehicle.update({
            where:{
                id:req.params.id
            },
            data:{
                name:req.body.name,
                model : req.body.model,
                licenseplate : req.body.licenseplate,
                type : req.body.type,
            }
        })
        res.status(200);
        res.json({"Sucess":true,"message":`Data updated for Vehicle with id ${req.params.id}`});
    }catch(e){
        res.status(400);
        res.json({"Sucess":false,"message":`Vehicle with id ${req.params.id} Not found`});
    }
}

 const deleteVehicle = async (req,res) =>{
    try{
        const vehicle = await prisma.vehicle.delete({
            where:{
                id:req.params.id
            }
        })
        res.status(200);
        res.json({"Sucess":true,"message":`Vehicle with id ${req.params.id} deleted`});
    }catch(e){
        res.status(400);
        res.json({"Sucess":false,"message":`Vehicle with id ${req.params.id} Not Found`});
    }
}

 const allVehicle = async (req,res) =>{
    try{
        const vehicles = await prisma.vehicle.findMany();
        res.status(200);
        console.log(vehicles.length);
        res.json({vehicles});
    }catch(e){
        res.status(400);
        res.json({"message":`${e}`});
    }

}

module.exports = {addVehicle,updateVehicle,deleteVehicle,allVehicle}