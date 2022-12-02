let router=require('express').Router();

router.get('/',(req,res)=>{
    let respuesta={cantidad:10,msg:'Listado de los productos'}
    res.json(respuesta);
});

router.get('/:idUser',(req,res)=>{
    let respuesta={nombre:'Miguel',msg:'Listado productos de Miguel',id:req.params.idUser}
    res.json(respuesta);
});

router.post('/',(req,res)=>{
    console.log(req.body);
    let respuesta={tipo:220,msg:'resultado de un post'}
    res.json(respuesta);
});

router.delete('/:idUser',(req,res)=>{
    let respuesta={msg:'usuario eliminado',idUser:req.params.idUser}
    res.json(respuesta)
});

module.exports=router;