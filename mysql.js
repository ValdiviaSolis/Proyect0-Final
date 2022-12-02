const mysql=require('../node_modules/mysql');
const mysqlConnection=mysql.createConnection({
    host:'localhost',user:'root',password:'',port:3306,database:'prograweb'
});

mysqlConnection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }else{
        console.log('DB is connected')
    }
});

module.exports=mysqlConnection;