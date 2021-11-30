const { application } = require('express');
const express = require('express');
const app = express();

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'DB'
});


app.get('/', (request,response)=> {
    
    connection.query(`select f_name,l_name from users`, (error,results)=> {

        if (error) {
            response.send('error');
        } else {
            response.send(results);
        }
    });
});
app.get('/aboutuni',(request,response)=>
{
    connection.query('select name from uni',(error,res)=>{
        if (error)
        {
            response.send('error');
        }
        else {
            response.send(res[0].name);
        }
    });
});


app.listen(3000, ()=> {
    console.log('Connected');
});