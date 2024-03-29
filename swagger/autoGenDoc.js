const mongooseToSwagger = require('mongoose-to-swagger');   
const EsquemaLivro = require('../src/models/livro')
const swaggerAutogen = require('swagger-autogen')({
    openapi: '3.0.0',
    language: 'pt-BR',
});

const outputFile = './swagger_output.json';
const endpointsFiles = ['../index.js', '../src/routes.js'];

let doc = {
    info: {
        version: "1.0.0",
        title: "API com BoardTask",
        description: "Documentação da API com BoardTask."
    },
    servers: [
        {
            url: "http://localhost:5501/",
            description: "Servidor localhost."
        },
        {
            url: "https://vercel.com/denildo-s-projects/desafio-5-dnc-bibioteca",
            description: "Servidor de produção."
        }
    ],
    consumes: ['application/json'],
    produces: ['application/json'],
    components: {
        schemas: {
            Livro: mongooseToSwagger(EsquemaLivro)
        }
    }
    
}


swaggerAutogen(outputFile, endpointsFiles, doc) .then(() => {
    console.log("Documentação do swagger gerada encontra-se no arquivo em: "+ outputFile);
    if (process.env.NODE_ENV !== 'production'){
        require("../index.js");
    }
})
