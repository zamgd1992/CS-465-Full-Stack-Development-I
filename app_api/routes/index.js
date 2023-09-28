const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');

// trips routes
router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripsCreate);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateOne)
    .delete(tripsController.tripsDeleteOne);

module.exports = router;