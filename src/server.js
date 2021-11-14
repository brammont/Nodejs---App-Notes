const express = require('express');
const path = require('path')

//iniciar aplicacion
const app = express();
//archivos estaticos
app.use(express.static(path.join(__dirname,'plublic')));
// motor de html
const Handlebars = require('express-handlebars');

//inicializaciones

//configuraciones
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname ,'views'));
app.set("view engine", "handlebars");
app.engine('handlebars', Handlebars.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".handlebars",    
 }));
//midlewares
app.use(express.urlencoded({extended:false}));

//variables globales

//rutas
app.get('/',(req,res)=>{
    res.render('index');
})
module.exports = app;