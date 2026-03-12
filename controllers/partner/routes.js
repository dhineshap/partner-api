const express = require('express');
const router = express.Router();

const { getSwaggerDocs } = require('./docs')

router.get('/shipment/docs.json', getSwaggerDocs)

module.exports = router;