let router=require('express').Router();
let contactoController=require('../controllers/contactoController');

router.get('/',(req,res)=>{
    contactoController.listar(req,res);
});

router.get('/:id',(req,res)=>{
    contactoController.buscar(req,res);
});

router.post('/',(req,res)=>{
    contactoController.crear(req,res);
});

router.delete('/:id',(req,res)=>{
    contactoController.borrar(req,res);
});

module.exports=router;