const express = require('express');
const path = require('path')
const app = express();
const { create } = require('express-handlebars');

//inicializaciones

//configuraciones
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname ,'views'));
const hbs = create({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
})
app.engine('handlebars', hbs.engine);
  app.set("view engine", ".hbs");
  

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