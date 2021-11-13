const express = require('express');
const path = require('path')
const app = express();

//inicializaciones

//configuraciones
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname ,'views'));
//midlewares
app.use(express.urlencoded({extended:false}));

//variables globales

//rutas
app.get('/',(req,res)=>{
    res.send("server");
})
//archivos estaticos
app.use(express.static(path.join(__dirname,'plublic')));
module.exports = app;