const express = require('express')
const mongoose = require('mongoose')
const {ApolloServer} = require("apollo-server-express")
const {resolvers} = require('./resolvers')
const {types} = require('./types')
const morgan = require('morgan')

const app = express()
const server = new ApolloServer({
    typeDefs:types,
    resolvers:resolvers
})

//Settings
app.set('port', process.env.PORT || 5000);

//Middlewares
app.use(morgan('dev'));


mongoose.connect("mongodb+srv://cdavid111:David111@cluster0.shcxl.mongodb.net/DB_Ciclo4", async()=>{
    console.log("conexión a bd exitosa");
    app.listen(app.get('port'), async()=>{
        await server.start()
        server.applyMiddleware({app})
        console.log(`Server listening on port ${app.get('port')}`);
    })
})
