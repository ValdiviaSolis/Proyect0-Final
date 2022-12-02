let router=require('express').Router();

router.get('/',(req,res)=>{
    let respuesta={tipo:20,msg:'Listado de los clientes'}
    res.json(respuesta);
});

router.get('/:idUser',(req,res)=>{
    let respuesta={tipo:20,msg:'Recuperando información',idUser:req.params.idUser};
   res.json(respuesta);
});

router.post('/',(req,res)=>{
    console.log(req.body);
    let respuesta={tipo:220,msg:'Resultado de un post'};
    res.json(respuesta);
});

router.delete('/:idUser',(req,res)=>{
    let respuesta={msg:'Usuario eliminado',idUser:req.params.idUser}
    res.json(respuesta)
});

module.exports=router;