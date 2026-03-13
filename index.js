const express = require('express');
const cors = require('cors');

const app = express();

const { swaggerUi, swaggerSpec } = require('./controllers/partner/docs');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/partner/shipment/docs', swaggerUi.serve);

app.use('/partner', require('./controllers/partner/routes'))

app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

if (require.main === module) {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}