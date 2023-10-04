const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');

// trips routes
router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsEditTrip)
    .delete(tripsController.tripsDeleteTrip);

module.exports = router;