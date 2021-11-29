//Este es el archivo principal donde se va a ejecutar nuestra aplicación
//Importaciones a Librerias
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

//Importaciones a servicos propios
const routes = require('./endpoints/index');
const bodyParser = require('body-parser');
const user = require('./services/user');

//Instanciar el Modulo Express
const app = express();

//Connect to DataBase
urldb = 'mongodb+srv://cdavid111:David111@cluster0.shcxl.mongodb.net/test'
mongoose.connect(urldb)
.then( () => {
    console.log('Connected to DataBase');
    app.listen(app.get('port'), ()=>{
        console.log(`Server listening on port ${app.get('port')}`);
        //user.createUser()
    })
})
.catch(error => console.log(error))

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));

//Routes
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(routes);