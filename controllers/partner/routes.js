const express = require('express');
const router = express.Router();

const { getSwaggerDocs, swaggerSpec, swaggerUi } = require('./docs')

router.get(
    '/shipment/docs',
    swaggerUi.setup(swaggerSpec, {
        explorer: true,
        customCss: '.swagger-ui .topbar { display: none }',
        customSiteTitle: "Partner API Documentation",
        swaggerOptions: {
            url: '/partner/shipment/docs.json',
            persistAuthorization: true,
            displayRequestDuration: true,
            filter: true,
            deepLinking: true
        }
    })
);
module.exports = router;