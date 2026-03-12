const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Partner API',
            version: '1.0.0',
            description: 'API documentation for managing shipments in the environment',
        },
        servers: [
            {
                url: 'https://webapi.dev.phoxhealth.com',
                description: 'Dev Environment',
            },
            {
                url: 'https://webapi.phoxhealth.com',
                description: 'Prod Environment',
            },
        ],
    },
    apis: [path.join(__dirname, 'swagger.js')] // Point to your route file
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

const getSwaggerDocs = async (req, res) => {
    // Add CORS headers specifically for this endpoint
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Content-Type', 'application/json');
    
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    res.json(swaggerSpec);
}

module.exports = {
    getSwaggerDocs,
    swaggerUi,
    swaggerSpec
};