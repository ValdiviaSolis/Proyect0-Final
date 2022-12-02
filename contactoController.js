let mysql=require('../db/mysql');

module.exports={
    crear:(req,res)=>{
        mysql.query(`INSERT INTO contacto (nombre,celular,email,edad,activo) VALUES ('${req.body.nombre}',${req.body.celular},'${req.body.email}',${req.body.edad},${req.body.activo})`,(error,results,fields)=>{
            if(error){
                res.json(error);
            }else{

                for(let i=0;i<req.body.dependientes.length;i++){
                    mysql.query(`INSERT INTO dependientes (nombre,edad,contacto) VALUES ('${req.body.dependientes[i].nombre}',${req.body.dependientes[i].edad},${results.insertId})`,(err,res,fiel)=>{
                        if(err){
                            res.json(err);
                        }else{
                            console.log(res);
                        }
                    });
                }
                res.json({tipo:200,msg:'Agregado',id:results.insertId});
            }
        });
    },
    listar:(req,res)=>{
        mysql.query('SELECT * FROM contacto',(error,results,fields)=>{
            if(error){
                res.json(error);
            }else{
                res.json(results);
            }
        });
    },
    buscar:(req,res)=>{
        mysql.query('SELECT * FROM contacto WHERE id=?',req.params.id,(error,results,fields)=>{
            if(error){
                res.json(error);
            }else{
                res.json(results);
            }
        });
    },
    borrar:(req,res)=>{
        mysql.query('DELETE FROM contacto WHERE id=?',req.params.id,(error,results,fields)=>{
            if(error){
                res.json(error);
            }else{
                res.json({msg:'Se elimino el usuario '+req.params.id,iDEliminado:req.params.id});
            }
        });
    }
};