const express = require('express');
const cors = require('cors');

const app = express();

const { swaggerUi, swaggerSpec } = require('./controllers/partner/docs');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/partner/shipment/docs',
    swaggerUi.serve,
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

app.use('/partner', require('./controllers/partner/routes'))

if (require.main === module) {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}