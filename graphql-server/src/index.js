//Este es el archivo principal donde se va a ejecutar nuestra aplicación
//Importaciones a Librerias
const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const {resolvers} = require('./resolvers');
const {types} = require('./types');
const morgan = require('morgan');

//Instanciar el Modulo Express
const app = express();

//Configuraciones nuestro servidor de Apollo
const server = new ApolloServer({
    typeDefs:types,
    resolvers:resolvers
})

//Connect to DataBase
urldb = 'mongodb+srv://cdavid111:David111@cluster0.shcxl.mongodb.net/DB_MisionTic_Ciclo4';
mongoose.connect(urldb)
.then( async () => {
    console.log('Connected to DataBase');
    app.listen(app.get('port'), async ()=>{
        await server.start()
        server.applyMiddleware({app})
        console.log(`Server listening on port ${app.get('port')}`);
    })
})
.catch(error => console.log(error))

//Settings
app.set('port', process.env.PORT || 5000);

//Middlewares
app.use(morgan('dev'));

