const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /partner/metadata:
 *   get:
 *     summary: Get partner metadata
 *     tags: [Partner]
 *     responses:
 *       200:
 *         description: Data fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Data Fetched Successfully!
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       shipperId:
 *                         type: string
 *                         example: m82sqa01
 *                       shipperName:
 *                         type: string
 *                         example: ABC Pharmacy
 *                       email:
 *                         type: string
 *                         example: john.doe@email.com
 *                       address:
 *                         type: object
 *                         properties:
 *                           address1:
 *                             type: string
 *                             example: 100 Main St
 *                           address2:
 *                             type: string
 *                             example: Suite 450
 *                           city:
 *                             type: string
 *                             example: Dublin
 *                           state:
 *                             type: string
 *                             example: Ohio
 *                           country:
 *                             type: string
 *                             nullable: true
 *                           postalCode:
 *                             type: string
 *                             example: 43017
 *                           name:
 *                             type: string
 *                             nullable: true
 *                           location:
 *                             type: object
 *                             properties:
 *                               latitude:
 *                                 type: number
 *                                 example: 40.09497
 *                               longitude:
 *                                 type: number
 *                                 example: -83.13497
 *                       settings:
 *                         type: array
 *                         items:
 *                           type: string
 *                         example: [ "COLD_CHAIN", "ROOM_TEMPERATURE" ]
 *                       services:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             carrier:
 *                               type: string
 *                               example: ABC Courier
 *                             deliveryService:
 *                               type: array
 *                               items:
 *                                 type: string
 *                               example: [ "Next Day", "Same Day" ]
 */

/**
 * @swagger
 * /partner/shipment:
 *   post:
 *     summary: Create a new shipment
 *     tags: [Partner]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               shipFrom:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: ABC Pharmacy
 *                   phone:
 *                     type: string
 *                     example: +19988776655
 *                   address:
 *                     type: object
 *                     properties:
 *                       address1:
 *                         type: string
 *                         example: 200 Main St
 *                       address2:
 *                         type: string
 *                         example: Suite 450
 *                       city:
 *                         type: string
 *                         example: Dublin
 *                       state:
 *                         type: string
 *                         example: Ohio
 *                       country:
 *                         type: string
 *                         nullable: true
 *                       postalCode:
 *                         type: string
 *                         example: 43017
 *                       name:
 *                         type: string
 *                         nullable: true
 *               shipTo:
 *                 type: object
 *                 properties:
 *                   firstName:
 *                     type: string
 *                     example: John
 *                   lastName:
 *                     type: string
 *                     example: Doe
 *                   phone:
 *                     type: string
 *                     example: +19988776655
 *                   email:
 *                     type: string
 *                     example: john.doe@email.com
 *                   address:
 *                     type: object
 *                     properties:
 *                       address1:
 *                         type: string
 *                         example: 100 Main St
 *                       city:
 *                         type: string
 *                         example: Waukesha
 *                       state:
 *                         type: string
 *                         example: WI
 *                       postalCode:
 *                         type: string
 *                         example: 53186
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: Package1
 *                     package_type:
 *                       type: string
 *                       example: ROOM_TEMPERATURE
 *                     items:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           name:
 *                             type: string
 *                             example: Drug
 *                           id:
 *                             type: string
 *                             example: NEW
 *               carrier:
 *                 type: string
 *                 example: ABC Courier
 *               deliveryService:
 *                 type: string
 *                 example: Same Day
 *               estimatedPickupTime:
 *                 type: string
 *                 example: 2025-09-05 11:15
 *               estimatedDeliveryTime:
 *                 type: string
 *                 example: 2025-09-07 11:25
 *               deliveryInstructions:
 *                 type: string
 *                 example: Call 10 mins before arrvial
 *               referenceNumber:
 *                 type: string
 *                 example: R001
 *               services:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: [ "COLD_CHAIN" ]
 *     responses:
 *       200:
 *         description: Shipment created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Shipment Created Successfully!
 *                 id:
 *                   type: string
 *                   example: aa4lb98m9jhgel5
 *                 number:
 *                   type: integer
 *                   example: 2078214
 *                 trackingUrl:
 *                   type: string
 *                   example: https://phox.run/t/aa4lb98m9jhgel5
 */
/**
 * @swagger
 * /partner/shipment/{shipmentId}/cancel:
 *   post:
 *     summary: Cancel a shipment by ID
 *     tags: [Partner]
 *     parameters:
 *       - in: path
 *         name: shipmentId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the shipment to cancel
 *         example: 10e4t8m9b4qoyu
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *                 example: Wrong details
 *     responses:
 *       200:
 *         description: Shipment cancellation response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Shipment Cancelled Successfully!
 */

router.get('/partner/metadata', (req, res) => { });
router.post('/partner/shipment', (req, res) => { });
router.post('/partner/shipment/:shipmentId/cancel', (req, res) => { });

module.exports = router;