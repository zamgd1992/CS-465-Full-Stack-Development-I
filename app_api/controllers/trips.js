const mongoose = require('mongoose');
const Model = mongoose.model('trips');

// POST: /trips - create new trip
const tripsAddTrip = async (req, res) => {
    Model.create({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    },
        (err, trips) => {
            if (err) {
                res
                    .status(400) //bad request
                    .json(err);
            } else {
                res
                    .status(201) //Created
                    .json(trips);
            }
        });
};

// GET: /trips - list of trips
const tripsList = async (req, res) => {
    Model
        .find({})
        .exec((err, trips) => {
            if (!trips) {
                return res
                    .status(404)
                    .json({ "message": "trips not found" });
            } else if (err) {
                return res
                    .status(4040)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trips);
            }
        });
};

// GET: /trips/:tripCode - returns single trip
const tripsFindByCode = (req, res) => {
    Model
        .find({ 'code': req.params.tripCode })
        .exec((err, trip) => {
            if (!trip) {
                return res
                    .status(404)
                    .json({ "message": "trip not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trip);
            }
        });
};

//PUT: /trips/:tripCode - update a trip
const tripsEditTrip = (req, res) => {
    if (!req.params.code) {
        return res
            .status(404)
            .json({
                "message": "Not found, trip code is required"
            });
    }
    Model
        .findByCode(req.params.code)
        .exec((err, trip) => {
            if (!trip) {
                return res
                    .status(404)
                    .json({
                        "message": "code not found"
                    });
            } else if (err) {
                return res
                    .status(400)
                    .json(err);
            }
            trip.code = req.body.code;
            trip.name = req.body.name;
            trip.length = req.body.length;
            trip.start = req.body.start;
            trip.resort = req.body.resort;
            trip.perPerson = req.body.perPerson;
            trip.image = req.body.image;
            trip.description = req.body.description;
            trip.save((err, trip) => {
                if (err) {
                    res
                        .status(404)
                        .json(err);
                } else {
                    res
                        .status(200)
                        .json(trip);
                }
            });
        }
        );
};

// DELETE: /trips/:tripCode
const tripsDeleteTrip = (req, res) => {
    const { tripCode } = req.params;
    if (tripCode) {
        Model
            .findByCodeAndRemove(tripCode)
            .exec((err, trip) => {
                if (err) {
                    return res
                        .status(404)
                        .json(err);
                }
                res
                    .status(204)
                    .json(null);
            }
            );
    } else {
        res
            .status(404)
            .json({
                "message": "No Trip"
            });
    }
};

module.exports = {
    tripsList,
    tripsAddTrip,
    tripsFindByCode,
    tripsEditTrip,
    tripsDeleteTrip
};